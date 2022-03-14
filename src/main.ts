import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import Vuetify from 'vuetify/lib';

Vue.use(VueCompositionAPI);
Vue.use(Vuetify);

import App from '@/App.vue';

new Vue({
    vuetify: new Vuetify(),
    render: h => h(App),
}).$mount('#app');