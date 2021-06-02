<template>
    <div class="rating-indicator">
        <div>
            <i v-for="index in rating" :key="index" class="fas fa-star"></i>
        </div>
        <div class="empty-stars" v-if="rating < 5">
            <i v-for="index in 5-rating" :key="index+5" class="far fa-star"></i>
        </div>
    </div>
</template>

<script>
module.exports = {
    name: "RatingIndicator",
    props: {
        rating: Number,
    },
};
</script>

<style scoped>
.rating-indicator div {
    display: inline-block;
}
div.empty-stars {
    display: inline;
    margin-left: -5px;
}
</style>