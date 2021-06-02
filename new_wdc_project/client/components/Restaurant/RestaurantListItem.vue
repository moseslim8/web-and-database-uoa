<template>
    <div class="restaurant-list-item sub-box">
        <img :src="rData.thumbnail" alt="restaurant thumbnail">
        <h2 class="restaurant-name" v-on:click="toRestaurantPage">{{ rData.restaurantName }}</h2>
        <h5 class="restaurant-location">{{ rData.city }}</h5>
        <restaurant-reviews-metric :rating="rData.averageRating" :numReviews="rData.reviews.length"></restaurant-reviews-metric>
        <h5 class="restaurant-cuisines"><span v-for="(c, i) in rData.cuisines" :key="i">{{ c }}</span></h5>
        <restaurant-price-metric :price="rData.priceRating"></restaurant-price-metric>
        <div class="restaurant-book-time">
            <button
                v-for="(time, index) in rData.availTimes"
                :key="index"
                class="btn btn-primary"
                :class="{'not-available': !time.available}"
                :disabled="!time.available"
            >{{ time.time }}</button>
        </div>
    </div>
</template>

<script>
var RestaurantReviewsMetric = require("./RestaurantReviewsMetric.vue");
var RestaurantPriceMetric = require("./RestaurantPriceMetric.vue");

module.exports = {
    name: "RestaurantListItem",
    components: {
        RestaurantReviewsMetric,
        RestaurantPriceMetric
    },
    props: {
        rData: {
            restaurantName: String,
            city: String,
            reviews: Array,
            cuisines: Array,
            priceRating: Number,
            averageRating: Number,
            thumbnail: String,
            availTimes: Array
        }
    },
    methods: {
        toRestaurantPage () {
            this.$router.push({name: 'restaurant', params: {restaurantId: 0}});
        }
    }
};
</script>

<style>
.restaurant-list-item {
    height: 200px;
    /* background-color: white;
    padding: 10px;
    box-shadow: 0 2px 67px 0 #0000001a; */
    display: grid;
    grid-column-gap: 10px;
    grid-template-columns: 250px auto auto 120px;;
    grid-template-areas:
        "image name . bookTime"
        "image location . bookTime"
        "image reviews . bookTime"
        "image cuisines . bookTime"
        "image price . bookTime";
}

.restaurant-list-item img {
    width: 250px;
    height: 180px;
    object-fit: cover;
    overflow: hidden;
    grid-area: image;
}

.restaurant-list-item .restaurant-name {
    grid-area: name;
}

.restaurant-list-item .restaurant-location {
    grid-area: location;
}

.restaurant-list-item .restaurant-reviews-metric {
    grid-area: reviews;
}

.restaurant-list-item .restaurant-cuisines {
    grid-area: cuisines;
}

.restaurant-list-item .restaurant-price-metric {
    grid-area: price;
}

.restaurant-list-item .restaurant-book-time {
    grid-area: bookTime;
}

.restaurant-book-time button {
    display: block;
    margin-bottom: 9px;
    width: 100%;
}

.restaurant-book-time button.not-available {
    background-color: #c4c4c4;
    border-color: #c4c4c4;
}
.restaurant-list-item h2 {
    margin: 0;
    padding: 0;
}

.restaurant-list-item .restaurant-cuisines span::after{
    content: ", ";
}
.restaurant-list-item .restaurant-cuisines span:last-of-type::after{
    content: "";
}


</style>