export function getLocale(): string | null {
  return localStorage.getItem('locale');
}

export function initLocale() {
  const locale = getLocale();
  if(!locale) {
    localStorage.setItem('locale', 'uz');
  }
}

export function setLocale(locale: string) {
  localStorage.setItem('locale', locale);
}