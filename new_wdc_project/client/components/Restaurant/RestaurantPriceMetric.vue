<template>
    <div class="restaurant-price-metric">
        <i v-for="index in price" :key="index" class="fas fa-dollar-sign"></i>
    </div>
</template>

<script>
module.exports = {
    name: "RestaurantPriceMetric",
    props: {
        price: Number
    },
};
</script>

<style scoped>
i.fa-dollar-sign {
    margin-right: 2px;
}
</style>