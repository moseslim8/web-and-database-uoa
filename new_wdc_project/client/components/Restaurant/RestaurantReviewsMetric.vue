<template>
    <div class="restaurant-reviews-metric">
        <rating-indicator :rating="rating"></rating-indicator>
        <div>
            <h5>Reviews ({{ numReviews }})</h5>
        </div>
    </div>
</template>

<script>
var RatingIndicator = require("../RatingIndicator.vue");

module.exports = {
    name: "RestaurantReviewsMetric",
    components: {
        RatingIndicator
    },
    props: {
        rating: Number,
        numReviews: Number
    },
};
</script>

<style scoped>
.restaurant-reviews-metric div {
    display: inline-block;
}
div.empty-stars {
    display: inline;
    margin-left: -5px;
}
</style>