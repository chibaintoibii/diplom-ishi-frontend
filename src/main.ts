import {createApp} from 'vue'
import './assets/styles/main.css'
import App from './App.vue'
import router from './router'
import {setMode} from "@/helper/mode";
import {initLocale} from "@/helper/locale";
import VueApexCharts from "vue3-apexcharts";
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

const app = createApp(App)
setMode()
initLocale()
app.use(router)
app.use(VueApexCharts);
app.use(Toast)


app.mount('#app')
