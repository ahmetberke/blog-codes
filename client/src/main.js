import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import markdown from 'vue3-markdown-it'

const myApp = createApp(App);
myApp.use(markdown);
myApp.use(store);
myApp.use(router);
myApp.mount('#app');
