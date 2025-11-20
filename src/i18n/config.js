import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          welcome: 'Welcome to Thread Clone',
          // Thêm translations
        }
      },
      vi: {
        translation: {
          welcome: 'Chào mừng đến Thread Clone',
          // Thêm translations
        }
      }
    },
    lng: 'vi',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n