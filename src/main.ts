import {createApp} from 'vue'
import './assets/styles/main.css'
import App from './App.vue'
import router from './router'
import {setMode} from "@/helper/mode";
import {initLocale} from "@/helper/locale";
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import {createVfm} from 'vue-final-modal'
import 'vue-final-modal/style.css'
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
// OR | AND
import '@vueup/vue-quill/dist/vue-quill.bubble.css';
import {VueQueryPlugin} from '@tanstack/vue-query'
import {i18n} from "@/services/locale";
import BaseInput from "@/components/Input/BaseInput.vue";
import VInput from "@/components/Input/VInput.vue";
import BaseButton from "@/components/Button/BaseButton.vue";
import Loader from "@/components/Loader/Loader.vue";

const app = createApp(App)

app.component('BaseInput', BaseInput)
app.component('VInput', VInput)
app.component('BaseButton', BaseButton)
app.component('Loader', Loader)
app.component('QuillEditor', QuillEditor);
app.component('VueDatePicker', VueDatePicker);
setMode()
initLocale()
const vfm = createVfm()
app.use(router)

app.use(Toast)
app.use(vfm)
app.use(i18n);
app.use(VueQueryPlugin)

app.mount('#app')
