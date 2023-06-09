import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';

// Styles SCSS
import "@/assets/scss/index.scss";

// Vuetify
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { aliases, mdi } from 'vuetify/iconsets/mdi'

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        }
    },
});

const app = createApp(App);

app.use(vuetify);
app.use(router);
app.mount('#app');





