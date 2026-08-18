import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const inviteURL = new URL(`${pathname}${request.nextUrl.search}`, "https://origin.tablanet.com")
  const response = NextResponse.rewrite(inviteURL)

  // Keep invitation tokens out of caches and referrer headers, including error responses.
  response.headers.set("Cache-Control", "private, no-store")
  response.headers.set("Referrer-Policy", "no-referrer")

  return response
}

export const config = {
  matcher: "/invite/:path*",
}
