# West-Bengal-Covid-Hospitals

WB Covid Hospitals

![product image](https://raw.githubusercontent.com/dyingg/West-Bengal-Covid-Hospitals/master/doc/map.jpg?token=ALHZ7DH2Z6PBULDCHYQ4ZWC67UTBE)

## Todo

### Frontend

- [x] Implement google maps with custom styling
- [x] Geolocate the user and set map to their location
- [X] Display hospitals as custom markers on the Map with their available and vacant seats [NEEDS UI FACELIFT]
- [ ] Facelift the custom hospital marker to look cool on the map, maybe even reduce information? remove that graph :(
- [ ] Create a UI below the map to display graphs of hospitals and how beds are filling up at them
- [ ] Implement a posh graph in the hospital UI to show the filling of seats

### Backend

- [ ] Create a database structure and populate hospital co-ords
- [ ] Write a scraping module to obtain pdf the WB Gov Health site for bed status
- [x] Write a parser for the PDF file provided by the government
- [ ] Write a Back End API to deliver active data to front end from DB

### Later

- [ ] Thinking about managing of adding new hospitals

### Other

- [x] Fix repo structure and create provision for backend
