const fs = require("fs");
const pdfParse = require("pdf-parse");
const { text } = require("express");
const _ = require("lodash");
//This is for dev purposes actual data will come over network request
const pdfData = fs.readFileSync("./data.pdf");

async function render_page(pageData) {
  let render_options = {
    //replaces all occurrences of whitespace with standard spaces (0x20). The default value is `false`.
    normalizeWhitespace: true,
    //do not attempt to combine same line TextItem's. The default value is `false`.
    disableCombineTextItems: false,
  };

  const textContent = await pageData.getTextContent(render_options);

  textContent.items.splice(0, 6);

  let itemsArray = [];
  let lastX;

  for (let item of textContent.items) {
    if (itemsArray.length == 0 || lastX != item.transform[4]) {
      itemsArray.push(item.str);
      lastX = item.transform[4];
    } else {
      itemsArray[itemsArray.length - 1] += ` ${item.str}`;
    }
  }

  let finalData = [];
  while (itemsArray.length > 5) {
    const localFormat = itemsArray.splice(0, 5);

    finalData.push({
      sr: localFormat[0],
      district: localFormat[1],
      name: localFormat[2],
      total: localFormat[3],
      vacant: localFormat[4],
      occupied: localFormat[3] - localFormat[4],
    });
  }

  return JSON.stringify(finalData);
}

async function parsePDF(pdf) {
  try {
    let data = await pdfParse(pdfData, { pagerender: render_page });
    let strArray = data.text.split("\n").filter((s) => s != "");
    let nestedArrary = strArray.map((k) => JSON.parse(k));

    return _.flatten(nestedArrary);
  } catch (e) {
    throw e;
  }
}

(async () => {
  console.log(await parsePDF(pdfData));
})();

module.exports = parsePDF;
