<template>
    <div id="theMainHeaderUserMenu">
        <a id="signInBtn" v-on:click="showSignInModal = true">Sign In</a>
        <a id="signUpBtn" v-on:click="showSignUpModal = true">Sign Up</a>
        <sign-in-modal v-bind:show="showSignInModal" @close-modal="showSignInModal = false"/>
        <sign-up-modal v-bind:show="showSignUpModal" @close-modal="showSignUpModal = false"/>
    </div>
</template>

<script>
var SignInModal = require("./SignInModal.vue");
var SignUpModal = require("./SignUpModal.vue");

module.exports = {
    name: "TheMainHeaderUserMenu",
    components: {
        SignInModal,
        SignUpModal
    },
    data() {
        return {
            showSignInModal: false,
            showSignUpModal: false
        };
    },
    methods: {

    }
};
</script>

<style scoped>

#theMainHeaderUserMenu{
    max-width: 300px;
    height: 100%;
}

#theMainHeaderUserMenu a{
    border-left: 1px solid #dfdfdf;
}

a {
    height: 100%;
    padding: 15px 20px;
    border: 0;
    float: right;
    cursor: pointer;
}

a:hover{
    background-color: #fcfcfc;
}
</style>