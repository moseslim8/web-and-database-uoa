<template>
    <main>
       <div id="searchArea">
           <h1>Find the perfect restaurant for any occasion</h1>
           <SearchBar/>
       </div>
    </main>
</template>

<script>
var SearchBar = require('../components/SearchBar.vue');

module.exports = {
    name: 'HomePage',
    components: {
        SearchBar,
    }
};
</script>

<style scoped>
    #searchArea{
        background-image: url('/images/searchBackground.jpg');
        background-position: bottom;
        background-size: cover;
        height: 600px;
        display: grid;
        grid-template-columns:  auto auto auto;
        grid-template-rows: 35fr 50px 65fr;
        grid-template-areas: 
            ". . ."
            ". . ."
            ". . .";
    }

    h1{
        grid-column: 2;
        grid-row: 1;
        justify-self: center;
        color: white;
        margin: auto;
    }

    #searchBar{
        grid-column: 2;
        grid-row: 2;
        justify-self: stretch;
        box-shadow: 8px 9px 100px 20px rgba(0,0,0,0.55);
        background-color: rgba(0,0,0,0.55);
    }
</style>