import { NextRequest, NextResponse } from 'next/server';

const redirects: { [key: string]: string } = {
  es: 'es-US',
  fr: 'fr-CA',
};

export function middleware(request: NextRequest) {
  const urlParts = request.nextUrl.pathname.split('/');
  const language = urlParts[1];

  // if (redirects[language]) {
  //   return NextResponse.redirect(
  //     `/${redirects[language]}/${urlParts.slice(2).join('/')}`
  //   );
  // }
}
