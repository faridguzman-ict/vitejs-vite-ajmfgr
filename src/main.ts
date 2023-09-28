import { createApp } from 'vue';
import './index.css';
import { invoke } from '@tauri-apps/api';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createPinia } from 'pinia';
import App from '../src/App.vue';

//fontawesome-icons

const app = createApp(App);

app.use(createPinia());
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');

invoke('greet', { name: 'World' }).then((response) => console.log(response));
