const APP_STORE_ID_PATTERN = /^\d{6,20}$/

function noStoreRedirect(destination: URL) {
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

  if (appStoreID && APP_STORE_ID_PATTERN.test(appStoreID)) {
    return noStoreRedirect(new URL(`https://apps.apple.com/app/id${appStoreID}`))
  }

  return noStoreRedirect(new URL("/contact", request.url))
}
