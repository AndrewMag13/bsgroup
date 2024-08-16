import { useTranslations } from 'next-intl'

export const getIntlKeys = (t: any, text: string) => {
  return Object.keys(t.raw(text))
}
export const getIntlKeysTranslated = (t: any, text: string) => {
  return Object.keys(t.raw(text)).map((key) => t(`${text}.${key}`))
}
