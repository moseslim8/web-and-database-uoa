<template>
    <header>
        <div id="headerTopBar">
            <div id="fontControl">
                <a id="decreaseFontSize" v-on:click="changeFont(-1)">A</a>
                <a id="increaseFontSize" v-on:click="changeFont(1)">A</a>
            </div>
            <div id="nightModeControl">Nightmode</div>
            <div class="clear"></div>
        </div>
        <div id="headerBottomBar">
            <router-link to="/" id="homeLink">fooddit</router-link>
            <the-main-header-user-menu/>
        </div>
    </header>
</template>

<script>
var TheMainHeaderUserMenu = require("./TheMainHeaderUserMenu.vue");

module.exports = {
    name: "TheMainHeader",
    components: {
        TheMainHeaderUserMenu
    },
    methods: {
        changeFont: function (multiplier) {
            if (document.body.style.fontSize == "") {
                document.body.style.fontSize = "1.0em";
            }
            document.body.style.fontSize = parseFloat(document.body.style.fontSize) + (multiplier * 0.2) + "em";
        }
    }
};
</script>

<style scoped>
header {
    background-color: white;
    box-shadow: 0 3px 67px 0 #0000001a;
    /* margin-top: 10px; */
    /* border: 1px solid #dfdfdf; */
}

header > div {
    width: 100%;
    margin: 0;
}

#headerTopBar > div {
    padding-right: 10px;
}

#headerBottomBar {
    display: grid;
    grid-template-columns: 150px auto;
    border-top: 1px solid #dfdfdf;
}

#homeLink {
    text-align: left;
    font-size: 2.2em;
    background: -webkit-linear-gradient(#16a085, #f4d03f);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    /* color: #3a3a3a; */
    padding: 0 10px;
    margin: 0;
}

#theMainHeaderUserMenu {
    justify-self: right;
}

#fontControl {
    float: right;
}

a:hover {
    cursor: pointer;
    background-color: gainsboro;
}

#decreaseFontSize {
    padding: 12px 10px 10px 10px;
    font-size: 0.75em;
}

#increaseFontSize {
    padding: 10px 10px 9px 10px;
    font-size: 1.25em;
}

#nightModeControl {
    float: right;
    padding: 5px;
}

#nightModeControl:hover {
    cursor: pointer;
    background-color: gainsboro;
}
</style>