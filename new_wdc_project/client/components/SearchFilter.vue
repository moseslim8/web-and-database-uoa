<template>
    <div id="searchFilter">
        <hr>
        <h5 v-on:click="isExpanded = !isExpanded">
            <b>{{ title }}</b>
            <i class="fas" v-bind:class="{ 'fa-chevron-up': isExpanded, 'fa-chevron-down': !isExpanded }"></i>
        </h5>
        <form v-if="isExpanded">
            <slot></slot>
        </form>
    </div>
</template>

<script>
module.exports = {
    name: "SearchFilter",
    props: {
        title: String,
    },
    data () {
        return {
            isExpanded: true
        };
    },
    methods: {}
};
</script>

<style scoped>
h5 {
    padding: 5px;
    cursor: pointer;
    user-select: none;
}
h5 i {
    float: right;
}
form{
    margin-left: 20px;
}
</style>