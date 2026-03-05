import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { NextResponse } from "next/server";
 
let headers = { 'accept-language': 'en-US,en;q=0.5' }
let languages = new Negotiator({ headers }).languages()
let locales = ['en-US', 'nl-NL', 'nl']
let defaultLocale = 'en-US'
 
match(languages, locales, defaultLocale) // -> 'en-US'

export function proxy(request) {
  const { pathname } = request.nextUrl

  // Verificar si ya tiene locale en la URL
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
  if (pathnameHasLocale) return

  // Redirigir con el locale detectado
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}
export const config = {
  matcher: ['/((?!_next).*)']  // Excluir rutas internas de Next.js
}

