import { createApp } from 'vue'
// @ts-expect-error
import App from './App.vue'

createApp(App).mount('#app')

const fun = () => {
  console.log('这是没有格式化的代码')
  console.log('我爱祖国')
}

fun()
