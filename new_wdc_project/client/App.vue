<template>
    <div id="app">
        <TheMainHeader/>

        <!-- Where the routes will be rendered -->
        <router-view></router-view>
        <footer>
            <p> Developed by: <br> Aiman Asyraaf, Caleb Rust, Josh Morgan, Moses Lim </p>
        </footer>
    </div>
</template>

<script>
var TheMainHeader = require("./components/TheMainHeader.vue");
module.exports = {
    name: "app",
    components: {
        TheMainHeader
    }
};
</script>

<style>
body {
    background-color: white;
}
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    /* margin: 15px auto; */
    /* max-width: 1200px; */
    /* background-color: #f5f6f8; */
    /* box-shadow: 0 0 200px 20px #00000014; */
}

footer {
    background-color: gainsboro;
    padding: 20px 20px 20px 20px;
}

.sub-box{
    background-color: white;
    padding: 10px;
    box-shadow: 0 2px 67px 0 #0000001a;
}

i {
    color: #007bff;
}

.fa-facebook {
    color: #4267b2;
}

.fa-facebook:hover {
    color: #4f7cd6;
}
.fa-google {
    color: #ea4335;
}
.fa-google:hover {
    color: #f84838;
}
.fa-twitter {
    color: #1da1f2;
}
.fa-twitter:hover {
    color: #25aafd;
}

.clear {
    clear: both;
}
</style>
