import { APP_STORE_URL } from "@/lib/site"

function noStoreRedirect(destination: URL | string) {
  return new Response(null, {
    status: 307,
    headers: {
      "Cache-Control": "private, no-store",
      Location: destination.toString(),
      "Referrer-Policy": "no-referrer",
      "X-Content-Type-Options": "nosniff",
    },
  })
}

export function GET(request: Request) {
  const appStoreID = process.env.APP_STORE_ID?.trim()

  if (appStoreID) {
    return noStoreRedirect(new URL(`https://apps.apple.com/app/id${appStoreID}`))
  }

  if (APP_STORE_URL) {
    return noStoreRedirect(new URL(APP_STORE_URL))
  }

  return noStoreRedirect(new URL("/contact", request.url))
}

