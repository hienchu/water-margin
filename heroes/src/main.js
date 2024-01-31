import './assets/main.css'
import MasonryWall from '@yeger/vue-masonry-wall'
import { createApp } from 'vue'
import app from './app.vue'
import VueLazyload from "vue-lazyload"

createApp(app)
    .use(MasonryWall)
    .use(VueLazyload)
    .mount('#app')