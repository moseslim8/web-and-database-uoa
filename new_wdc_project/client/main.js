var Vue = require('vue/dist/vue.js');
var VueRouter = require('vue-router/dist/vue-router.js');
var App = Vue.component('App', require('./App.vue'));
var HomePage = Vue.component('HomePage', require('./views/HomePage.vue'));
var ViewRestaurantPage = Vue.component('ViewRestaurantPage', require('./views/ViewRestaurantPage.vue'));
var RestaurantsPage = Vue.component('RestaurantsPage', require('./views/RestaurantsPage.vue'));
var NotFound = require('./views/NotFound.vue');
Vue.use(VueRouter);

var routes = [
    {
        path: '/', 
        component: HomePage
    },
    {
        name: 'restaurant',
        path: '/restaurant/:restaurantId', 
        component: ViewRestaurantPage,
        props: true
    },
    {
        path: '/restaurants', 
        component: RestaurantsPage
    },
    {
        path: '*', 
        component: NotFound
    },
];

var router = new VueRouter({
    mode: 'history',
    routes
});

var app = new Vue({
    router,
    render: h => h(App)
  }).$mount('#app');
