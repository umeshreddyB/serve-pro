import Image from "next/image";
import { quotes } from "@/data/quotes";

export const metadata = {
  title: "Quotes | Nirbhandham",
};

export default function QuotesPage() {
  return (
    <section className="w-full bg-black px-4 py-14 md:px-8 md:py-16">
      <div className="mx-auto max-w-[1400px]">
        <h1 className="text-center text-3xl font-semibold text-[var(--gold)]">Quotes</h1>
        <div className="mx-auto mt-4 h-[1px] w-[200px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent" aria-hidden />

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {quotes.map((quote) => (
            <article
              key={quote.id}
              className="flex flex-col overflow-hidden rounded-lg border-2 border-[var(--accent)] bg-white shadow-sm"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md bg-white">
                <Image
                  src={quote.image}
                  alt={`Quote ${quote.id}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-contain object-center"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
