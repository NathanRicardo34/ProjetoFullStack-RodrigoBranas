import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import './style.css'
import { Icon } from '@iconify/vue';

createApp(App).component('ify', Icon).mount('#app')
