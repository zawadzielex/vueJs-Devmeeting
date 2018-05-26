<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h2>List</h2>
        <sort-people @onSortBy="handleSortBy"></sort-people>
        <people-list :people="sharedState.beers" @onRemovePerson="handleRemoveBeer"></people-list>
        <add-person @onAddPerson="handleAddBeer" :peopleLength="sharedState.beers.length"></add-person>
  </div>
</template>

<script>
import PeopleList from "./components/PeopleList";
import AddPerson from "./components/AddPerson";
import SortPeople from "./components/SortPeople";
import store from './store'; 

export default {
  name: "app",
  components: {
    PeopleList,
    AddPerson,
    SortPeople
  },
  created() {
    store.fetchProducts();
  },
  data() {
    //3/ 3. Instead of just products we have to add reference to whole state
    return {
      sharedState: store.state
    }
  },
  methods: {
    handleAddBeer(beer) {
      store.addBeer(beer);
    },
    handleRemoveBeer({ key }) {
      store.removeBeer(key);
    },
    handleSortBy({ type }) {
      store.sortBy(type)
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
