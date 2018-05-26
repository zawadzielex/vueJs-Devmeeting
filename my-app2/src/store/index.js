import axios from "axios";

const store = {
  state: {
    beers: []
  },
  async fetchProducts() {
    this.state.beers = await axios
      .get("https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6")
      .then(res => res.data);
  },
  addBeer(beer) {
    this.state.beers.push(beer);
  },
  removeBeer({ key }) {
    this.state.beers.splice(key, 1);
  },
  sortBy(type) {
    switch (type) {
      case "name":
      console.log(this.state.beers);
        this.state.beers.sort((a, b) => {
          return a.name > b.name;
        });
        break;
      case "ibu":
        this.state.beers.sort((a, b) => {
          return a.ibu > b.ibu;
        });
        break;
    }
  }
};

export default store;
