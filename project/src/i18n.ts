import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'ger',
  messages: {
    en: {
      welcome: 'nice to meet you '

    },
    ger:{
      welcome: 'freut mich '
    },

  }
})

export default i18n
