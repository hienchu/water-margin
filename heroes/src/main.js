import './assets/main.css'
import MasonryWall from '@yeger/vue-masonry-wall'
import { createApp } from 'vue'
import demo from './demo/app.vue'
import VueLazyload from "vue-lazyload"

createApp(demo)
    .use(MasonryWall)
    .use(VueLazyload)
    .mount('#app')
