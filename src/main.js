import { createApp } from 'vue'
import App from './App.vue'
import './assets/style.css'
import router from './router'

import VueApexCharts from "vue3-apexcharts";
createApp(App).use(router).mount('#app')
const app = createApp(App);
app.use(VueApexCharts);
