import en from '../locales/en.json'
import ge from '../locales/ge.json'
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  globalInjection: true,
  messages:
    {
      en,
      ge
    }
})

export {
  i18n
}
