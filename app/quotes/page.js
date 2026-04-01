import Image from "next/image";
import { quotes } from "@/data/quotes";

export const metadata = {
  title: "Quotes | Nirbhandham",
};

export default function QuotesPage() {
  return (
    <section className="w-full bg-black px-4 py-14 md:px-8 md:py-16">
      <div className="mx-auto max-w-[1400px]">
        <p className="text-center font-sans text-sm font-medium tracking-[0.2em] text-[#C08240]">Quotes</p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {quotes.map((quote) => (
            <article
              key={quote.id}
              className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-white shadow-sm"
            >
              <div className="pointer-events-none absolute inset-y-5 left-2 z-10 w-px bg-black" aria-hidden />
              <div className="pointer-events-none absolute inset-y-5 right-2 z-10 w-px bg-black" aria-hidden />

              <div className="absolute inset-0 px-5 pb-12 pt-6">
                <div className="relative h-full w-full">
                  <Image
                    src={quote.image}
                    alt={`Quote ${quote.id}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="quote-card-photo object-cover object-right grayscale"
                  />
                </div>
              </div>

              <span
                className="pointer-events-none absolute bottom-2 left-3 z-20 font-serif text-5xl leading-none text-black md:text-6xl"
                aria-hidden
              >
                &ldquo;
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
