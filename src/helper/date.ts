export enum DateFormats {
  FullDate = 'dd.MM.yyyy HH:mm'
}

export function toDateFormat(date: Date | undefined) {
  if(date) {
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
  } else {
    return ''
  }
}