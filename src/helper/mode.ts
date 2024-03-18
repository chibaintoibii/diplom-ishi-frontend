export function setMode() {
  const mode = localStorage.getItem('mode');
  if(!mode) {
    localStorage.setItem('mode', 'light');
  }

  if(mode === 'dark') {
    (document.getElementsByTagName('html')[0] as HTMLElement).classList.add('dark');
  }
  const locale = localStorage.getItem('locale');
  if(!locale) {
    localStorage.setItem('locale', 'uz');
  }
}

export function getMode() {
  const mode = localStorage.getItem('mode');
  if(!mode) return 'light';
  else return mode;
}