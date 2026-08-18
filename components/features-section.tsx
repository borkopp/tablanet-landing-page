import Image from "next/image"

export function FeaturesSection() {
  return (
    <section className="relative mx-auto w-full max-w-[1440px] px-6 py-16 sm:px-10 md:py-24 lg:py-32">
      {/* Section Header */}
      <div className="mb-12 flex flex-col justify-between gap-8 md:mb-16 lg:flex-row lg:items-end">
        <div className="flex max-w-2xl flex-col gap-3">
          <h2 className="text-4xl leading-[1.08] font-medium tracking-tight text-foreground sm:text-5xl md:text-6xl">
            A quiet place for <br className="hidden sm:inline" />
            <span className="text-primary">a proper game.</span>
          </h2>
        </div>
        <p className="max-w-sm text-base leading-relaxed text-muted-foreground sm:text-lg">
          No public matchmaking. No strangers. Every match starts with someone
          you chose.
        </p>
      </div>

      {/* 3 Cards Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
        {/* Card 1 */}
        <div className="flex flex-col justify-between overflow-hidden rounded-3xl border border-border/60 bg-card p-6 text-card-foreground shadow-sm transition-all hover:border-border sm:p-8">
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
              One link.
              <br />
              One friend.
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Send a single-use invitation. Your match stays between the two of
              you.
            </p>
          </div>
          <div className="relative mt-8 aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border/40 bg-background/50">
            <Image
              src="/images/card-invitation.jpg"
              alt="Private invitation illustration"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col justify-between overflow-hidden rounded-3xl border border-border/60 bg-card p-6 text-card-foreground shadow-sm transition-all hover:border-border sm:p-8">
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
              A proper duel.
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Two people, one table, the full 52-card game. Best of three?
            </p>
          </div>
          <div className="relative mt-8 aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border/40 bg-background/50">
            <Image
              src="/images/card-duel.jpg"
              alt="Live table card duel illustration"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col justify-between overflow-hidden rounded-3xl border border-border/60 bg-card p-6 text-card-foreground shadow-sm transition-all hover:border-border sm:p-8">
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
              No noise.
              <br />
              Just cards.
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              No ads, chips, chat, or public matchmaking. Just the game and the
              person across the table.
            </p>
          </div>

          <div className="relative mt-8 aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border/40 bg-background/50">
            <Image
              src="/images/card-pure-gameplay.jpg"
              alt="Pure gameplay cards illustration"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
