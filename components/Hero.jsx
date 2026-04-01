import Image from "next/image";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="mx-auto grid w-full max-w-[1400px] gap-10 px-4 py-16 md:grid-cols-2 md:items-center md:px-6">
      <div className="space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
          Nirbhandham
        </p>
        <h1 className="text-4xl font-bold leading-tight md:text-5xl">
          Building resilient communities with dignity and care.
        </h1>
        <p className="text-zinc-400">
          We design grassroots initiatives that support education, healthcare,
          and livelihood for underserved communities.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button>Join Us</Button>
          <Button className="bg-zinc-800 hover:bg-zinc-700">Learn More</Button>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-2xl border border-zinc-800">
        <Image
          src="/uploads/placeholder-hero.jpg"
          alt="Community initiative"
          width={1000}
          height={750}
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}
