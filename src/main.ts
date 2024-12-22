import {createApp} from 'vue'
import App from "@/app.vue"
import router from "@/router.ts";
import elementPlus from 'element-plus'

import '@/style/element-plus.css'
import '@/style/prism.css'
import '@/style/prism-line-numbers.css'
import '@/style/global.css'

const element = createApp(App);
element.use(router)
element.use(elementPlus)
element.mount('#app')
