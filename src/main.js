import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
router.afterEach((to) => {
  const defaultTitle = 'My App'
  document.title = to.meta.title || defaultTitle
})

app.use(router)
app.mount('#app')
