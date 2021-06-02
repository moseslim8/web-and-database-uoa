<template>
    <div id="searchBar">
        <SearchBarLocation class="form-control form-control-lg"/>
        <DatePicker/>
        <TimePicker/>
        <GuestsPicker/>
        <SearchBarKeywords class="form-control form-control-lg"/>
        <button class="btn btn-primary" type="button" v-on:click="search">Go</button>
        <div style="clear: both;"></div>
    </div>
</template>

<script>
var SearchBarLocation = require("./SearchBarLocation.vue");
var DatePicker = require("./DatePicker.vue");
var TimePicker = require("./TimePicker.vue");
var GuestsPicker = require("./GuestsPicker.vue");
var SearchBarKeywords = require("./SearchBarKeywords.vue");

module.exports = {
    name: "SearchBar",
    components: {
        SearchBarLocation,
        DatePicker,
        TimePicker,
        GuestsPicker,
        SearchBarKeywords
    },
    methods: {
        search() {
            this.$router.push("/restaurants");
        }
    }
};
</script>

<style scoped>
@media only screen and (max-width: 699px) {
    #searchBar {
        display: grid;
        grid-template-columns: auto;
        grid-row-gap: 10px;
        grid-template-areas:
            "location"
            "date"
            "time"
            "people"
            "keywords"
            "button";
    }
}
@media only screen and (min-width: 800px) {
    #searchBar {
        display: grid;
        grid-template-columns: 30% auto auto auto 30% 10%;
        grid-template-areas:
            "location date time people keywords"
            "button button button button button";
    }
}
@media only screen and (min-width: 1500px) {
    #searchBar {
        display: grid;
        grid-template-columns: 30% auto auto auto 30% auto;
        grid-template-areas: "location date time people keywords button";
    }
}

#searchBarLocation {
    grid-area: location;
}
.date-picker {
    grid-area: date;
}
.time-picker {
    grid-area: time;
}
.guests-picker {
    grid-area: people;
}
#searchBarKeywords {
    grid-area: keywords;
}
button {
    grid-area: button;
    height: 50px;
    margin-top: -2px;
    width: 100%;
    min-width: 60px;
}
</style>