import '../theme/index.css'
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import fade from './fade.vue'

import VueI18n from 'vue-i18n'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

Vue.use(VueI18n)

const messages = {
  en: {
    message: 'hello',
    ...enLocale // Or use `Object.assign({ message: 'hello' }, enLocale)`
  },
  zh: {
    message: '你好',
    ...zhLocale // Or use `Object.assign({ message: '你好' }, zhLocale)`
  }
}
// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
})

Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key.value)
})

new Vue({
  i18n,
  el: '#fade',
  render: h => h(fade)
}).$mount('#fade')

// new Vue({
//   el: '#app',
//   render: h => h(App)
// })
