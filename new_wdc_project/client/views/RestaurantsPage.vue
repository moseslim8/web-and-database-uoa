<template>
    <main>
        <div id="restaurants">
            <search-bar/>
            <search-filters-container/>
            <restaurant-list :restaurants="restaurants"/>
            <page-numbers/>
        </div>
    </main>
</template>

<script>
var SearchBar = require("../components/SearchBar.vue");
var SearchFiltersContainer = require("../components/SearchFiltersContainer.vue");
var RestaurantList = require("../components/Restaurant/RestaurantList.vue");
var PageNumbers = require("../components/PageNumbers.vue");
var restaurantsApi = require("../ajax/restaurant.js");

module.exports = {
    name: "RestaurantsPage",
    components: {
        SearchBar,
        SearchFiltersContainer,
        RestaurantList,
        PageNumbers
    },
    mounted () {
        restaurantsApi.getAll(_restaurants => {
            this.restaurants = _restaurants;
        });
    },
    data (){
        return {
            restaurants: []
        };
    }
};
</script>

<style scoped>
#restaurants {
    display: grid;
    grid-template-columns: 25% 75%;
    grid-template-rows: auto auto auto;
    grid-template-areas:
        "searchBar searchBar"
        "filters restaurantList"
        "pageNumbers pageNumbers";
}

#searchBar {
    grid-area: searchBar;
    margin: 40px auto;
    /* box-shadow: 0 3px 67px 0 #0000001a; */
}

#restaurantList {
    grid-area: restaurantList;
    /* background-color: white; */
    margin: 0 20px;
}

#searchFiltersContainer {
    grid-area: filters;
    margin-left: 20px;
    background-color: white;
    height: min-content;
}

#pageNumbers {
    grid-area: pageNumbers;
}
</style>