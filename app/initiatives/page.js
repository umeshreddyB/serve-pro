import Image from "next/image";
import { initiatives } from "@/data/initiatives";

export const metadata = {
  title: "Initiatives | Nirbhandham",
};

export default function InitiativesPage() {
  return (
    <section className="w-full bg-black px-4 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="font-serif text-2xl font-semibold text-[#D4AF37] md:text-3xl">Our Initiatives</h1>
        <div className="mx-auto mt-4 h-[1px] w-[200px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent" aria-hidden />
        <p className="mx-auto mt-8 max-w-3xl font-serif text-lg font-semibold leading-relaxed text-white md:text-xl">
          At Nirban Dham, every offering—whether a spiritual gathering or a selfless act of service—is rooted in the spirit of
          inner awakening and collective upliftment.
        </p>
        <p className="mx-auto mt-5 max-w-3xl font-serif text-base leading-relaxed text-white/95 md:text-lg">
          These moments are not merely events; they are sacred opportunities to walk the path of dharma, devotion, and seva.
          Here are some glimpses of the journeys we&apos;ve walked together.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-[1400px] gap-6 md:mt-16 md:grid-cols-3 md:gap-6 lg:gap-8">
        {initiatives.map((initiative) => (
          <article
            key={initiative.id}
            className="flex flex-col overflow-hidden rounded-xl border border-[#5c1f28] bg-[#2D0A0E] text-center shadow-sm"
          >
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={initiative.image}
                alt={initiative.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center"
              />
            </div>
            <div className="flex flex-1 flex-col px-4 pb-5 pt-5">
              <h2 className="font-serif text-lg font-bold leading-snug text-white md:text-[1.125rem]">{initiative.title}</h2>
              <div className="mt-4 space-y-2 font-serif text-sm text-white/95">
                <p>
                  <span className="text-white/75">Start Date: </span>
                  {initiative.startDate}
                </p>
                <p>
                  <span className="text-white/75">Venue: </span>
                  {initiative.venue}
                </p>
              </div>
              <button
                type="button"
                className="mx-auto mt-6 inline-flex rounded-full bg-[#A51C30] px-8 py-2.5 font-serif text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                Learn more
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
