import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Hotel from './models/hotel.js';

const APIURL = 'http://localhost:3000/hotels/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hotel = '';

  allStars = true;
  stars5 = true;
  stars4 = true;
  stars3 = true;
  stars2 = true;
  stars1 = true;

  filterActive = false;
  filterNameActive = true;
  filterStarsActive = true;

  hotels = [];

  constructor(private http: HttpClient){
  }

  ngOnInit(): void {
    this.loadHotels('hotel/all/stars/all');
  }

  loadHotels(params) {
    this.hotels = [];
    this.http.get(APIURL + params).subscribe(jsonContent => {
      for (var key in jsonContent) {
        if (jsonContent.hasOwnProperty(key)) {
          const hotel = Object.assign(new Hotel, jsonContent[key]);
          this.hotels.push(hotel);
        }
      }
    });
  }

  filter() {
    const hotelName = this.hotel == '' ? 'all' : this.hotel;
    const stars = '' + (this.stars5 ? '5,':'') + (this.stars4 ? '4,':'') +
    (this.stars3 ? '3,':'') + (this.stars2 ? '2,':'') + (this.stars1 ? '1,':'');
    this.allStars = this.stars1 && this.stars2 && this.stars3 && this.stars4 && this.stars5;
    this.loadHotels('hotel/'+hotelName+'/stars/'+(stars == ''? 'all':stars));
  }

  toogleAllStars() {
    this.allStars = !this.allStars;
    this.stars5 = this.allStars;
    this.stars4 = this.allStars;
    this.stars3 = this.allStars;
    this.stars2 = this.allStars;
    this.stars1 = this.allStars;
  }

  toogleFilterMenu() {
    this.filterActive = !this.filterActive;
  }

  toogleFilterName() {
    this.filterNameActive = !this.filterNameActive;
  }

  toogleFilterStars() {
    this.filterStarsActive = !this.filterStarsActive;
  }
}
