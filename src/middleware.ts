import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  //return Response.json({ hello: "there" });
  //return NextResponse.redirect(new URL('/home', request.url))
  request.testing = "abc";
  return NextResponse.next()
}

