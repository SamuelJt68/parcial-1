import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { NextResponse, type NextRequest } from 'next/server'

const locales = ['en', 'es'] as const
const defaultLocale = 'en'

function getLocale(request: NextRequest): 'en' | 'es' {
  const acceptLanguage = request.headers.get('accept-language') || ''
  
  const headers = { 'accept-language': acceptLanguage }
  const languages = new Negotiator({ headers }).languages()

  return match(languages, locales, defaultLocale) as 'en' | 'es'
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) {
    return NextResponse.next()
  }

  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`

  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ],
}