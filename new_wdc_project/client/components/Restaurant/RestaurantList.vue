<template>
    <div id="restaurantList">
        <restaurant-list-item v-for="(item, index) in restaurants" v-bind:key="index" :rData="item"/>
    </div>
</template>

<script>
var RestaurantListItem = require('./RestaurantListItem.vue');

module.exports = {
    name: "RestaurantList",
    components: {
        RestaurantListItem
    },
    props: {
        restaurants: Array
    },
    methods: {

    }
};
</script>

<style scoped>
.restaurant-list-item {
    margin-bottom: 20px
}
</style>