// app/[lang]/dictionaries.ts
import 'server-only'

const dictionaries = {
  en: () => import('./dictionaries/en.json').then((m) => m.default),
  es: () => import('./dictionaries/es.json').then((m) => m.default),
} as const

export type Locale = keyof typeof dictionaries

export const hasLocale = (locale: string): locale is Locale =>
  locale in dictionaries

export type Dictionary = {
  welcome: string
  hello: string
  home: {
    title: string
    description: string
  }
  footer: {
    derechos: string
    propiedad: string
  }
  page:{
    genero: string,
    casa: string,
    varita: string,
    madera: string,
    longitud: string
  } 
}

export const getDictionary = async (locale: Locale): Promise<Dictionary> =>
  dictionaries[locale]()
