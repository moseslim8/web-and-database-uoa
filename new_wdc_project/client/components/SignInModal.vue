<template>
    <div id="signInModal">
        <BaseModal title="Sign In" v-bind:show="show" @close-modal="close">
            <template v-slot:body>
                <form>
                    <div class="form-group">
                        <label for="signInEmail">Email address</label>
                        <input
                            type="email"
                            class="form-control"
                            id="signInEmail"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                        >
                        <small
                            id="emailHelp"
                            class="form-text text-muted"
                        ></small>
                    </div>
                    <div class="form-group">
                        <label for="signInPassword">Password</label>
                        <input
                            type="password"
                            class="form-control"
                            id="signInPassword"
                            placeholder="Password"
                        >
                    </div>
                    <button id="signInButton" class="btn btn-primary">Sign In</button>
                </form>
            </template>
            <template v-slot:footer>
                <div id="footer">
                    <p>Or have a social media account?</p>    
                    <a id="facebookSignIn"><i class="fab fa-facebook fa-4x"></i></a>
                    <a id="googleSignIn"><i class="fab fa-google fa-4x"></i></a>
                    <a id="twitterSignIn"><i class="fab fa-twitter fa-4x"></i></a>
                </div>
                
            </template>
        </BaseModal>
    </div>
</template>

<script>
var BaseModal = require("./BaseModal.vue");

module.exports = {
    name: "SignInModal",
    props: {
        show: Boolean
    },
    components: {
        BaseModal
    },
    methods: {
        close() {
            this.$emit("close-modal");
        }
    }
};
</script>

<style scoped>
    #signInButton{
        width: 100%
    }
    #footer i{
        cursor: pointer;
        margin: 0 20px;
    }

    
</style>