<template>
    <div class="restaurant-reviews-list-item">
        <h4>{{ username }}</h4>
        <rating-indicator :rating="rating"></rating-indicator>
        <h6>{{ comments }}</h6>
    </div>
</template>

<script>
var RatingIndicator = require("../RatingIndicator.vue");

module.exports = {
    name: "RestaurantListItem",
    components: {
        RatingIndicator
    },
    props: {
        username: String,
        rating: Number,
        comments: String
    },
    methods: {

    }
};
</script>

<style>


</style>