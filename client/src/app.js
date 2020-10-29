import Vue from 'vue';
import router from './router';
import App from './app.vue';
import vuelidate from 'vuelidate'

Vue.use(vuelidate)

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
});
