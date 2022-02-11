import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import './assets/tailwind.css'
//import i18n from "@/plugins/i18n";
import BackendService from "./services/Backend";


let app = createApp(App)
app.config.globalProperties.$Backend = BackendService

app.use(store)
app.use(router)
//app.use(i18n)
app.mount("#app")
