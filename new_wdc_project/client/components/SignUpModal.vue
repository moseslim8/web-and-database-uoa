<template>
    <div id="signUpModal">
        <BaseModal title="Sign Up" v-bind:show="show" @close-modal="close">
            <template v-slot:body>
                <form>
                    <div class="form-group">
                        <div id="signUpName" class="form-row">
                            <div class="col">
                                <input type="text" class="form-control" placeholder="First name">
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Last name">
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <input
                            type="email"
                            class="form-control"
                            id="signUpEmail"
                            aria-describedby="emailHelp"
                            placeholder="Email"
                        >
                        <small id="emailHelp" class="form-text text-muted"></small>
                    </div>
                    <div class="form-group">
                        <input
                            type="password"
                            class="form-control"
                            id="signUpPassword"
                            placeholder="Password"
                        >
                    </div>
                    <div class="form-group">
                        <input
                            type="password"
                            class="form-control"
                            id="signUpReenterPassword"
                            placeholder="Re-enter password"
                        >
                    </div>
                    <div class="form-check">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            value
                            id="isRestaurantOwner"
                            v-on:change="toggleResturantOwnerSection"
                        >
                        <label
                            class="form-check-label"
                            for="isRestaurantOwner"
                        >I am a restaurant owner.</label>
                    </div>
                    <div v-if="showRestaurantOwnerSection">
                        <div class="form-group">
                            <input
                                type="text"
                                class="form-control"
                                id="signUpRestaurantName"
                                placeholder="Restaurant name"
                            >
                        </div>
                        <div class="form-group">
                            <input
                                type="text"
                                class="form-control"
                                id="signUpRestaurantStreet"
                                placeholder="Address"
                            >
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <input type="text" class="form-control" id="signUpRestaurantSuburb" placeholder="Suburb">
                            </div>
                            <div class="form-group col-md-4">
                                <select id="inputState" class="form-control">
                                    <option selected>State</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div class="form-group col-md-2">
                                <input type="text" class="form-control" id="signUpRestaurantZip" placeholder="Zip">
                            </div>
                        </div>
                        <div class="form-group">
                            <input
                                type="text"
                                class="form-control"
                                id="signUpRestaurantPhone"
                                placeholder="Restaurant contact no."
                            >
                        </div>
                    </div>
                    <button id="signUpButton" class="btn btn-primary">Sign Up</button>
                </form>
            </template>
            <template v-slot:footer>
                <div id="footer">
                    <p>Or have a social media account?</p>
                    <a id="facebookSignUp">
                        <i class="fab fa-facebook fa-4x"></i>
                    </a>
                    <a id="googleSignUp">
                        <i class="fab fa-google fa-4x"></i>
                    </a>
                    <a id="twitterSignUp">
                        <i class="fab fa-twitter fa-4x"></i>
                    </a>
                </div>
            </template>
        </BaseModal>
    </div>
</template>

<script>
var BaseModal = require("./BaseModal.vue");

module.exports = {
    name: "SignUpModal",
    props: {
        show: Boolean
    },
    components: {
        BaseModal
    },
    data() {
        return {
            showRestaurantOwnerSection: false
        };
    },
    methods: {
        close: function() {
            this.$emit("close-modal");
        },
        toggleResturantOwnerSection: function(event) {
            this.showRestaurantOwnerSection = event.target.checked;
        }
    }
};
</script>

<style scoped>
#signUpButton {
    width: 100%;
}
#footer i {
    cursor: pointer;
    margin: 0 20px;
}
.form-check {
    margin-bottom: 10px;
}
</style>