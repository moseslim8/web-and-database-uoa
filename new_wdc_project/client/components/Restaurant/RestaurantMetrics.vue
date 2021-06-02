<template>
    <div class="restaurant-metrics">
        <h5 class="restaurant-location">{{ location }}</h5>
        <restaurant-reviews-metric :rating="rating" :numReviews="numReviews"></restaurant-reviews-metric>
        <h5 class="restaurant-cuisines">{{ cuisines }}</h5>
        <restaurant-price-metric :price="price"></restaurant-price-metric>
    </div>
</template>

<script>
var RestaurantReviewsMetric = require("./RestaurantReviewsMetric.vue");
var RestaurantPriceMetric = require("./RestaurantPriceMetric.vue");

module.exports = {
    name: "RestaurantMetrics",
    components: {
        RestaurantPriceMetric,
        RestaurantReviewsMetric
    },
    props: {
        rating: Number,
        numReviews: Number,
        cuisines: String,
        price: Number,
        location: String
    },
    methods: {}
};
</script>

<style>

</style>