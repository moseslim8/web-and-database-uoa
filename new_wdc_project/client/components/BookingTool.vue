<template>
    <div id="bookingTool" class="sub-box">
        <h4>Make a booking</h4>
        <hr>
        <date-picker/>
        <time-picker/>
        <guests-picker/>
        <button class="btn btn-primary">BOOK NOW</button>
    </div>
</template>

<script>
var DatePicker = require("./DatePicker.vue");
var TimePicker = require("./TimePicker.vue");
var GuestsPicker = require("./GuestsPicker.vue");

module.exports = {
    name: "BookingTool",
    components: {
        DatePicker,
        TimePicker,
        GuestsPicker
    },
    props: {
        
    },
};
</script>

<style scoped>
#bookingTool{
    padding: 20px;
}

h4{
    text-align: center;
}

.date-picker, .time-picker, .guests-picker{
    margin-top: 20px;
}

button{
    width: 100%;
}
</style>