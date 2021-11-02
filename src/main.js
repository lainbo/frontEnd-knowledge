import { createApp } from 'vue'
import router from '@/router/index'
import App from './App.vue'
import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'
import 'virtual:windi.css'
import '~@style/global.scss'

// 预览组件以及样式
import VMdPreview from '@kangc/v-md-editor/lib/preview'
import '@kangc/v-md-editor/lib/style/preview.css'
// VuePress主题以及样式（这里也可以选择github主题）
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js'
import '@kangc/v-md-editor/lib/theme/style/vuepress.css'

// Prism
import Prism from 'prismjs'
// 代码高亮
import 'prismjs/components/prism-json'
VMdPreview.use(vuepressTheme, { Prism })

createApp(App).use(router).use(ArcoVue).use(VMdPreview).mount('#app')
