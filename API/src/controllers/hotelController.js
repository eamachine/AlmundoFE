import {Rest} from 'express-restful-es6';
import Hotel from '../models/hotel';

@Rest('/hotels/hotel/:name/stars/:stars')
class hotelController {

  constructor() {
    this.hotels = [];

    const fs = require("fs");
    // Get content from file
    const contents = fs.readFileSync("./data/data.json");
    // Define to JSON type
    const jsonContent = JSON.parse(contents);

    for (var key in jsonContent) {
      if (jsonContent.hasOwnProperty(key)) {
        const hotel = Object.assign(new Hotel, jsonContent[key]);
        this.hotels.push(hotel);
      }
    }
  }

  get(name, stars) {

    let hotelfiltered = this.hotels;

    if(name != "all") {
      hotelfiltered = hotelfiltered.filter(h => h.name.includes(name));
    }

    if(stars != "all") {
      hotelfiltered = hotelfiltered.filter(h => stars.includes(h.stars));
    }

    return hotelfiltered;
  }
}
