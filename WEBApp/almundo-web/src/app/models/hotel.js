class Hotel {

  constructor(id, name, stars, price, image, amenities) {
    this.id = id;
    this.name = name;
    this.stars = stars;
    this.price = price;
    this.image = image;
    this.amenities = amenities;
  }

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get stars() {
    return this._stars;
  }

  set stars(value) {
    this._stars = value;
  }

  get image() {
    return this._image;
  }

  set image(value) {
    this._image = value;
  }

  get price() {
    return this._price;
  }

  set price(value) {
    this._price = value;
  }

  get amenities() {
    return this._amenities;
  }

  set amenities(value) {
    this._amenities = value;
  }
}

export default Hotel;
