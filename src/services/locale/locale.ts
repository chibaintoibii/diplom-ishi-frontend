import {computed} from "vue";

interface Locale {
  name: string;
  code: string;
}

export const locales = [
  {code: 'uz', name: "O'zbekcha"},
  {code: 'ru', name: 'Русский'},
  {code: 'en', name: 'English'},
] as Locale[];

export const localeCodes = computed(() => {
  return locales.map((el) => el.code)
})