
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from "vue"

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import VueDatepickerLocal from 'vue-datepicker-local'

// Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.component('pagination', require('./components/pagination.vue'));
Vue.component('vue-datepicker-local',VueDatepickerLocal);

Vue.config.productionTip = false;

import App from './App.vue';
import router from './config/router'
import func from './config/function'
import Api from './config/api'

Vue.use(func);
Vue.use(Api);

const app = new Vue({
    el: '#app',
	router,
	render: h => h(App)
});
