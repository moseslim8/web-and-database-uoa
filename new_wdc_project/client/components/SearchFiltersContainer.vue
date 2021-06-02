<template>
    <div id="searchFiltersContainer" class="sub-box">
        <h4><i class="fas fa-filter fa-sm"></i> Filtered by</h4>
        <search-filter title="Cusines">
            <div v-for="(item, index) in cuisineItems" v-bind:key="index" class="form-check">
                <input class="form-check-input" type="checkbox" value v-bind:name="item.name">
                <label class="form-check-label h5" v-bind:for="item.name">{{ item.displayName }}</label>
            </div>
        </search-filter>
    </div>
</template>

<script>
var SearchFilter = require('./SearchFilter.vue');

module.exports = {
    name: "SearchFiltersContainer",
    components: {
        SearchFilter
    },
    data () {
        return {
            cuisineItems: [
                {name: "thai", displayName: "Thai"},
                {name: "italian", displayName: "Italian"},
                {name: "american", displayName: "American"},
                {name: "greek", displayName: "Greek"}
            ]
        };
    }
};
</script>

<style scoped>
.form-check{
    margin-bottom: 7px;
}

</style>