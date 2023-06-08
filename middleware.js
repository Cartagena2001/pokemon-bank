import { NextResponse } from 'next/server';
import cookie from 'cookie';

export function middleware(request) {
  const cookies = cookie.parse(request.headers.cookie || '');
  if (cookies.loggedin !== undefined) {
    // El usuario está autenticado, permitirle acceder a la ruta
    return NextResponse.next();
  } else {
    // El usuario no está autenticado, redirigirlo a la página de inicio
    return NextResponse.redirect(new URL('/', request.url));
  }
}

export const config = {
  matcher: '/dashboard/home',
};
