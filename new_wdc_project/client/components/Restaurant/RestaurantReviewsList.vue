<template>
    <div id="restaurantReviewsList" class="sub-box">
        <h3>What people say: </h3>
        <restaurant-reviews-list-item
            v-for="(review, index) in reviews"
            v-bind:key="index"
            :username="review.username"
            :rating="review.rating"
            :comments="review.comments"
        />
    </div>
</template>

<script>
var RestaurantReviewsListItem = require("./RestaurantReviewsListItem.vue");

module.exports = {
    name: "RestaurantReviewsList",
    components: {
        RestaurantReviewsListItem
    },
    props: {
        reviews: Array
    },
    data() {
        return {
            // Placeholder data to fill listings for time being
        };
    },
    methods: {}
};
</script>

<style scoped>
#restaurantReviewsList{
    background-color: white;
}

.restaurant-reviews-list-item {
    margin-bottom: 20px;
}
</style>