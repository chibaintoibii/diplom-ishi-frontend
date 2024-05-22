import {createI18n} from "vue-i18n";
const availableLocales = ['uz', 'ru', 'en']
import uz from "@/assets/locales/uz.json";
import en from '@/assets/locales/en.json';
import ru from '@/assets/locales/ru.json';
function getDefaultLocale(): string {
  const locale = localStorage.getItem('locale') ?? navigator.language.split('-')[0];

  if (availableLocales.includes(locale)) {
    return locale;
  } else {
    return 'uz'
  }
}

export const i18n = createI18n({
  locale: getDefaultLocale(),
  globalInjection: true,
  legacy: false,
  messages: {
    uz,
    ru,
    en
  }
})