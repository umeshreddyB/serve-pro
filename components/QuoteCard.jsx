import Image from "next/image";
import Card from "./Card";

export default function QuoteCard({ quote }) {
  return (
    <Card className="space-y-4">
      <Image
        src={quote.image}
        alt={quote.author}
        width={800}
        height={500}
        className="h-44 w-full rounded-xl object-cover"
      />
      <p className="text-lg leading-relaxed text-zinc-100">&quot;{quote.text}&quot;</p>
      <p className="text-sm font-semibold text-red-400">- {quote.author}</p>
    </Card>
  );
}
