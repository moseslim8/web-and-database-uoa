<template>
    <main>
        <h1 class="restaurant-name">{{ name }}</h1>
        <restaurant-metrics
            :rating="rating"
            :numReviews="numReviews"
            :cuisines="cuisines"
            :price="price"
            :location="location"
        ></restaurant-metrics>
        <hr>
        <div class="restaurant-image">Image</div>
        <p class="restaurant-description">{{ description }}</p>
        <restaurant-reviews-list :reviews="reviews"></restaurant-reviews-list>
        <booking-tool></booking-tool>
    </main>
</template>

<script>
var RestaurantMetrics = require("../components/Restaurant/RestaurantMetrics.vue");
var RestaurantReviewsList = require("../components/Restaurant/RestaurantReviewsList.vue");
var BookingTool = require("../components/BookingTool.vue");

module.exports = {
    name: "ViewRestaurantPage",
    components: {
        RestaurantMetrics,
        RestaurantReviewsList,
        BookingTool
    },
    props: {
        restaurantId: Number
    },
    data() {
        return {
            name: "Restaurant 1",
            location: "Adelaide",
            description: "This is the description of the restaurant displayed.",
            rating: 3,
            numReviews: 47,
            reviews: [
                {
                    username: "username1",
                    rating: 3,
                    comments: "These are the comments."
                },
                {
                    username: "username2",
                    rating: 5,
                    comments: "These are the comments."
                },
                {
                    username: "username3",
                    rating: 1,
                    comments: "These are the comments."
                },
            ],
            cuisines: "Thai, Asian",
            price: 2,
            thumbnail: "/images/restaurant1.jpg",
            times: [
                {
                    time: "7:00 pm",
                    available: true
                },
                {
                    time: "7:15 pm",
                    available: false
                },
                {
                    time: "7:30 pm",
                    available: true
                },
                {
                    time: "7:45 pm",
                    available: true
                }
            ]
        };
    }
};
</script>

<style scoped>
main {
    padding: 20px;
    display: grid;
    grid-template-columns: 33fr 34fr 33fr;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    grid-template-rows: auto auto auto;
    grid-template-areas:
        "name name image"
        "metrics metrics image"
        "desc desc book"
        "reviews reviews reviews";
}

.restaurant-name {
    grid-area: name;
}

.restaurant-image {
    grid-area: image;
    background-color: white;
}

.restaurant-description {
    grid-area: desc;
}

#restaurantReviewsList{
    grid-area: reviews;
}

#bookingTool{
    grid-area: book;
}
</style>