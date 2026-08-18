import Image from "next/image"
import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden bg-background text-foreground">
      {/* Non-sticky Navbar */}
      <header className="relative z-10 mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-6 sm:px-10 md:py-8">
        {/* Enlarged Logo */}
        <div className="flex items-center gap-3.5 select-none">
          <Image
            src="/tablanet-logo.svg"
            alt=""
            width={38}
            height={48}
            priority
            aria-hidden="true"
            className="h-11 w-auto shrink-0 md:h-12"
          />
          <span className="font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Tablanet
          </span>
        </div>

        {/* Enlarged Button */}
        <Link
          href="/download"
          prefetch={false}
          className={buttonVariants({
            className:
              "h-12 rounded-full px-6 text-base font-semibold shadow-sm transition-transform hover:scale-105 active:scale-95 md:h-13 md:px-8 md:text-lg",
          })}
        >
          Get the app
        </Link>
      </header>

      {/* Main Hero Body */}
      <main className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col items-center justify-start">
        {/* Headline */}
        <div className="mx-auto flex max-w-7xl flex-col items-center px-4 pt-6 pb-4 text-center md:pt-12 lg:pt-16">
          <h1 className="text-5xl leading-[1.06] font-medium tracking-tight text-foreground sm:text-7xl sm:leading-[1.03] md:text-8xl lg:text-[6.5rem]">
            A Balkan classic,
            <br />
            made for your pocket.
          </h1>
        </div>

        {/* Hero Mockup Image */}
        <div className="relative mx-auto mt-3 flex w-full max-w-6xl justify-center px-4 pb-8 sm:mt-5 md:mt-8">
          {/* Ambient Glow */}
          <div
            className="pointer-events-none absolute top-1/4 left-1/2 h-1/2 w-3/4 -translate-x-1/2 rounded-full bg-gradient-to-b from-primary/15 to-transparent blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 flex w-full justify-center">
            <Image
              src="/images/hero-mockup.png"
              alt="Tablanet card game interface mockups on dual mobile devices"
              width={1400}
              height={1400}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              className="h-auto max-h-[500px] w-full max-w-4xl object-contain drop-shadow-2xl md:max-h-[620px] lg:max-w-[1080px]"
            />
          </div>
        </div>
      </main>
    </section>
  )
}
