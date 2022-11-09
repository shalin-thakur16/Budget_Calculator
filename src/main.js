import { createApp } from 'vue'
import App from './App.vue'
import './assets/style.css'
import router from './router'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faPlus);
library.add(faCar);
library.add(faGreaterThan);
createApp(App).component("font-awesome-icon", FontAwesomeIcon).use(router).mount('#app')
