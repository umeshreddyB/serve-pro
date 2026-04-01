"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { quotes } from "@/data/quotes";
import { initiatives, initiativesSection } from "@/data/initiatives";

const QUOTE_ITEMS = quotes.slice(0, 12);

const heroFeatureCards = [
  { src: "/uploads/hero2.png", label: "Darshan", alt: "Darshan" },
  { src: "/uploads/hero3.png", label: "Disha", alt: "Disha" },
  { src: "/uploads/hero4.png", label: "Dhyan", alt: "Dhyan" },
];

const icons = [
  {
    image: "ic1",
    title: "Seva Opportunities",
    text: "Engage in Seva through temple rituals, food distribution, ashram upkeep, spiritual learning, and festival support at Nirban Dham.",
  },
  {
    image: "ic2",
    title: "Membership",
    text: "Become a Member of Shri Nirban Dham – Join Our Spiritual Family and Walk the Path of Enlightenment.",
  },
  {
    image: "ic3",
    title: "Donate",
    text: "Support Shri Nirban Dham – Your Generous Donation Helps Sustain Spiritual Services and Community Welfare.",
  },
  {
    image: "ic4",
    title: "Campaigns",
    text: "Join Our Campaigns – Support Spiritual, Environmental, and Humanitarian Initiatives at Shri Nirban Dham.",
  },
];

export default function HomeView() {

  const [quotePage, setQuotePage] = useState(0);
  const [quotesPerView, setQuotesPerView] = useState(1);

  useEffect(() => {
    const mqMd = window.matchMedia("(min-width: 768px)");
    const mqLg = window.matchMedia("(min-width: 1024px)");
    const update = () => {
      if (mqLg.matches) setQuotesPerView(3);
      else if (mqMd.matches) setQuotesPerView(2);
      else setQuotesPerView(1);
    };
    update();
    mqMd.addEventListener("change", update);
    mqLg.addEventListener("change", update);
    return () => {
      mqMd.removeEventListener("change", update);
      mqLg.removeEventListener("change", update);
    };
  }, []);

  const maxQuotePage = Math.max(0, Math.ceil(QUOTE_ITEMS.length / quotesPerView) - 1);

  useEffect(() => {
    setQuotePage((p) => Math.min(p, maxQuotePage));
  }, [maxQuotePage]);

  const quoteStart = quotePage * quotesPerView;
  const visibleQuotes = QUOTE_ITEMS.slice(quoteStart, quoteStart + quotesPerView);

  const [initiativeIndex, setInitiativeIndex] = useState(0);
  const initiative = initiatives[initiativeIndex];
  const maxInitiativeIndex = initiatives.length - 1;

  return (
    <div className="w-full bg-black px-4 pb-10 md:px-8">
      <section className="border-b border-zinc-800 py-8 text-center md:py-10">
        <h1 className="home-fade-up font-serif text-2xl font-bold tracking-[0.12em] text-white md:text-4xl md:tracking-[0.14em]">
          KARMA - HEE - SADHNA
        </h1>
        <div className="home-fade-up mx-auto mt-4 h-[1px] w-[200px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent" aria-hidden />

        <div className="relative mx-auto mt-8 flex w-full max-w-[1400px] justify-center px-0 md:mt-10 overflow-hidden">
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-full w-full -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(30,64,175,0.45)_0%,rgba(15,23,42,0.2)_45%,transparent_72%)] blur-[2px]"
            aria-hidden
          />
          <div className="relative z-[1] w-full h-[50vh] md:h-[75vh] max-h-[800px] min-h-[400px]">
            <Image
              src="/uploads/hero1.png"
              alt="Shri Shri Uttam Khyapa Maharaj"
              fill
              priority
              className="object-cover object-[center_20%]"
            />
          </div>
        </div>

        <p className="home-fade-up home-fade-up-delay-1 mx-auto mt-8 max-w-3xl px-2 font-sans text-sm leading-relaxed text-white md:mt-10 md:text-base">
          Shri Nirban Dham is a sacred spiritual sanctuary where seekers find peace, devotion, and enlightenment. Rooted in the wisdom of Ativarnashrami Kaula Avadhut Shri Shri Uttam Khyapa Maharaj, our ashram is a divine space for meditation, prayers, and self-realization. Here, ancient traditions blend with modern spirituality, guiding souls toward inner harmony and universal love.
        </p>

        <div className="home-fade-up home-fade-up-delay-2 mt-8 flex flex-wrap items-center justify-center gap-3 md:mt-10 md:gap-4">
          <button
            type="button"
            className="rounded-full bg-[var(--accent)] px-7 py-2.5 font-sans text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Discover Now
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--accent)] bg-transparent px-7 py-2.5 font-sans text-sm font-semibold text-white transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            View Events
            <span aria-hidden className="text-base leading-none">
              →
            </span>
          </button>
        </div>

        <div className="home-fade-up home-fade-up-delay-3 mx-auto mt-12 flex max-w-2xl items-center gap-4 px-4 md:mt-14 md:max-w-3xl">
          <div
            className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent"
            aria-hidden
          />
          <span className="shrink-0 font-serif text-2xl text-[var(--accent)] md:text-3xl" aria-hidden>
            ॐ
          </span>
          <div
            className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent"
            aria-hidden
          />
        </div>
      </section>

      <section className="py-8 md:py-10">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-4 md:gap-6">
          {heroFeatureCards.map((card, idx) => (
            <div
              key={card.label}
              className="group relative mx-auto w-full max-w-[280px] overflow-hidden rounded-2xl sm:mx-0 sm:max-w-none home-fade-up"
              style={{ animationDelay: `${0.35 + idx * 0.08}s` }}
            >
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
              </div>
              <span className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-[var(--accent)] px-8 py-2 font-serif text-sm font-semibold text-white shadow-md md:text-[0.9375rem]">
                {card.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-[var(--accent)]/50 bg-black px-4 py-12 md:px-8 md:py-16">
        <div className="mx-auto grid max-w-[1400px] gap-10 md:grid-cols-2 md:items-start md:gap-12 lg:gap-14">
          <div className="flex w-full flex-col gap-4">
            <div className="relative aspect-[7/3] w-full overflow-hidden rounded-xl border border-[#8B1538]">
              <Image
                src="/uploads/a1.png"
                alt="Gathering at Shri Nirban Dham"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
            <div className="relative aspect-[7/3] w-full overflow-hidden rounded-xl border border-[#8B1538]">
              <Image
                src="/uploads/c1.png"
                alt="Community event at Shri Nirban Dham"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          <div className="min-w-0">
            <p className="font-serif text-sm font-medium tracking-wide text-[var(--gold)] md:text-base">About Us</p>
            <h2 className="mt-3 font-serif text-2xl font-semibold leading-snug text-white md:text-3xl lg:text-[1.85rem] lg:leading-tight">
              Join Shri Nirban Dham on the Path of Spiritual Awakening and Divine Grace
            </h2>
            <div className="mt-5 h-[1px] w-full max-w-[220px] bg-gradient-to-r from-[var(--accent)] to-transparent" aria-hidden />
            <p className="mt-5 font-sans text-sm italic leading-relaxed text-white md:text-[0.9375rem]">
              At Shri Nirban Dham, we welcome all seekers to embark on a journey of spiritual growth and inner peace.
              Through sacred rituals, meditation, and selfless service, we nurture a space where devotion meets
              transformation. Under the divine guidance of Ativarnashrami Kaula Avadhut Shri Shri Uttam Khyapa Maharaj, our
              ashram offers a sanctuary for those seeking solace, wisdom, and enlightenment.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-full border-2 border-white/90 shadow-sm">
                <Image
                  src="/uploads/hero1.png"
                  alt="Sri Sri Uttam Khyapa"
                  fill
                  sizes="72px"
                  className="object-cover object-center"
                />
              </div>
              <div>
                <p className="font-serif text-base font-bold text-[var(--gold)] md:text-lg">Sri Sri Uttam Khyapa</p>
                <p className="mt-0.5 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-white md:text-xs">
                  MATHADHEESH
                </p>
              </div>
            </div>

            <button
              type="button"
              className="mt-8 rounded-full bg-[#8B1538] px-7 py-2.5 font-sans text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Join Our Group
            </button>
          </div>
        </div>
      </section>

      <div className="mx-auto flex max-w-3xl items-center gap-4 px-6 py-10 md:max-w-4xl md:py-12">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent" aria-hidden />
        <span className="shrink-0 font-serif text-2xl text-[var(--accent)] md:text-3xl" aria-hidden>
          ॐ
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent" aria-hidden />
      </div>

      <section className="bg-black px-4 pb-6 pt-2 text-center md:px-8">
        <h3 className="mx-auto max-w-4xl font-serif text-xl font-semibold leading-snug text-white md:text-2xl lg:text-[1.65rem]">
          Preserve Spiritual Heritage for Future Generations
        </h3>
        <div className="mx-auto mt-4 h-[1px] w-[200px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent" aria-hidden />
        <p className="mx-auto mt-5 max-w-3xl font-sans text-sm leading-relaxed text-white md:text-base">
          Shri Nirban Dham is a place where spirituality meets serenity. Through ancient wisdom, devotional practices, and
          selfless service, we create an environment for spiritual seekers to connect with their higher selves. Whether
          through meditation, rituals, or teachings, the ashram serves as a guiding light for those on the path of
          enlightenment and inner peace.
        </p>
      </section>

      <section className="bg-black px-4 pb-14 pt-4 md:px-8 md:pb-16">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {icons.map((item) => (
            <div key={item.title} className="flex flex-col items-center text-center">
              <div className="flex h-[88px] w-[88px] items-center justify-center overflow-visible rounded-full border-2 border-white/95 bg-black p-2 shadow-sm">
                <div className="relative h-[68px] w-[68px]">
                  <Image
                    src={`/uploads/${item.image}.png`}
                    alt={item.title}
                    fill
                    sizes="68px"
                    className="object-contain object-center"
                  />
                </div>
              </div>
              <h4 className="mt-4 font-serif text-base font-semibold text-white">{item.title}</h4>
              <p className="mt-3 max-w-[280px] font-sans text-xs leading-relaxed text-zinc-300 sm:max-w-none md:text-[13px]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="mx-auto flex max-w-[1400px] items-center gap-4 px-4 py-8 md:px-8 md:py-10">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent" aria-hidden />
        <span className="shrink-0 font-serif text-2xl text-[var(--accent)] md:text-3xl" aria-hidden>
          ॐ
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent" aria-hidden />
      </div>

      <section className="bg-black px-4 pb-12 md:px-8 md:pb-14">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[var(--gold)] md:text-sm">INITIATIVES</p>
          <h2 className="mt-3 max-w-4xl font-serif text-2xl font-semibold leading-snug text-white md:text-3xl">
            Empowering Communities Through Sustainable Initiatives
          </h2>
          <div className="mt-4 h-[1px] w-[200px] bg-gradient-to-r from-[var(--accent)] to-transparent" aria-hidden />
          <p className="mt-5 max-w-4xl font-serif text-sm italic leading-relaxed text-white md:text-base">
            We empower communities by promoting sustainable practices, environmental education, and eco-friendly
            initiatives. Through conservation efforts, green projects, and social awareness programs, we inspire individuals
            to take action for a healthier planet. Join us in creating a sustainable future where nature and humanity thrive
            together in harmony and responsibility.
          </p>

          <div className="mt-8 flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:gap-12">
            <Link
              href="/initiatives"
              className="inline-flex rounded-full bg-[#8B1538] px-8 py-2.5 font-serif text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Read more
            </Link>
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#8B1538] p-2">
                <Image src="/uploads/ic5.png" alt="Phone" width={22} height={22} className="h-5 w-5 object-contain" />
              </div>
              <div className="text-left">
                <p className="font-serif text-md font-bold text-white/90">Have a Questions?</p>
                <a
                  href="tel:+919883376407"
                  className="mt-0.5 block font-serif text-lg tracking-tight text-white hover:underline md:text-xl"
                >
                  +91-98-833-76-407
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="bg-black py-10">
        <div className="relative mx-auto max-w-[1400px] px-10">
          <button
            type="button"
            aria-label="Previous quotes"
            disabled={quotePage <= 0}
            onClick={() => setQuotePage((p) => Math.max(0, p - 1))}
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full p-1 text-3xl leading-none text-[var(--accent)] transition-opacity disabled:opacity-30 enabled:hover:opacity-90"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next quotes"
            disabled={quotePage >= maxQuotePage}
            onClick={() => setQuotePage((p) => Math.min(maxQuotePage, p + 1))}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full p-1 text-3xl leading-none text-[var(--accent)] transition-opacity disabled:opacity-30 enabled:hover:opacity-90"
          >
            ›
          </button>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {visibleQuotes.map((item) => (
              <article
                key={item.id}
                className="flex flex-col overflow-hidden rounded-lg border border-[var(--accent)] bg-white p-2 shadow-sm"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md bg-zinc-100">
                  <Image
                    src={item.image}
                    alt={`Quote ${item.id}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain object-center"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/quotes"
            className="rounded-full bg-[var(--accent)] px-8 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Read more
          </Link>
        </div>

        <div className="mx-auto mt-10 flex max-w-3xl items-center gap-3 px-4">
          <div className="h-px flex-1 bg-[var(--accent)]" aria-hidden />
          <span className="shrink-0 text-xl text-[var(--accent)]" aria-hidden>
            ॐ
          </span>
          <div className="h-px flex-1 bg-[var(--accent)]" aria-hidden />
        </div>
      </section>

      <section className="bg-black px-4 py-12 md:px-8">
        <div className="relative mx-auto w-full max-w-[1400px] px-12 md:px-14">
          <button
            type="button"
            aria-label="Previous initiative"
            disabled={initiativeIndex <= 0}
            onClick={() => setInitiativeIndex((i) => Math.max(0, i - 1))}
            className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--accent)] text-lg font-bold text-white shadow-md transition-opacity disabled:opacity-35 enabled:hover:opacity-90"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next initiative"
            disabled={initiativeIndex >= maxInitiativeIndex}
            onClick={() => setInitiativeIndex((i) => Math.min(maxInitiativeIndex, i + 1))}
            className="absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--accent)] text-lg font-bold text-white shadow-md transition-opacity disabled:opacity-35 enabled:hover:opacity-90"
          >
            ›
          </button>

          <div className="relative rounded-lg border-2 border-[var(--accent)] bg-black px-5 pb-8 pt-10 md:px-10 md:pb-10 md:pt-12">
            <span className="absolute -top-3 left-6 z-10 rounded-full border-2 border-black bg-[var(--accent)] px-4 py-1.5 font-serif text-xs font-semibold uppercase tracking-wide text-white md:left-10 md:px-5 md:text-sm">
              {initiativesSection.badge}
            </span>

            <h2 className="font-serif text-2xl font-semibold leading-tight text-white md:text-3xl lg:text-[1.75rem] lg:leading-snug">
              {initiativesSection.headline}
            </h2>
            <div className="mt-4 h-[1px] w-[200px] bg-gradient-to-r from-[var(--accent)] to-transparent" aria-hidden />
            <p className="mt-4 max-w-3xl font-serif text-sm leading-relaxed text-zinc-200 md:text-base">
              {initiativesSection.intro}
            </p>

            <div className="mt-8 grid gap-8 md:grid-cols-2 md:items-start md:gap-10">
              <div className="space-y-4">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md bg-zinc-900">
                  <Image
                    src={initiative.image}
                    alt={initiative.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>
                <dl className="space-y-2 font-serif text-sm text-zinc-200">
                  <div className="flex flex-wrap gap-x-2">
                    <dt className="text-zinc-400">Start Date:</dt>
                    <dd>{initiative.startDate}</dd>
                  </div>
                  <div className="flex flex-wrap gap-x-2">
                    <dt className="text-zinc-400">Event End Date:</dt>
                    <dd>{initiative.endDate}</dd>
                  </div>
                  <div className="flex flex-wrap gap-x-2">
                    <dt className="text-zinc-400">Venue:</dt>
                    <dd>{initiative.venue}</dd>
                  </div>
                </dl>
              </div>

              <div className="min-w-0">
                <h3 className="font-serif text-xl font-semibold leading-snug text-white md:text-2xl">
                  {initiative.title}
                </h3>
                <ul className="mt-5 space-y-3 font-serif text-sm leading-relaxed text-zinc-200 md:text-[0.9375rem]">
                  {initiative.bullets.map((line, idx) => (
                    <li key={`${initiative.id}-${idx}`} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 font-serif text-sm leading-relaxed text-zinc-300 md:text-[0.9375rem]">
                  {initiative.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black px-4 pb-10 pt-8 md:px-8">
        <div className="mx-auto w-full max-w-[1400px] rounded-lg border border-[var(--accent)]/40 bg-[#121212] px-6 py-8 text-center md:px-10 md:py-10">
          <h3 className="font-serif text-2xl font-semibold text-white md:text-[1.65rem]">Purpose and Goals</h3>
          <div className="mx-auto mt-4 h-[1px] w-[200px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent" aria-hidden />
          <p className="mt-4 text-sm leading-relaxed text-white md:text-base">
            We strive to cultivate spiritual growth, sustainability, and selfless service, empowering communities through
            wisdom, devotion, and meaningful action for a harmonious future
          </p>
        </div>

        <div className="mx-auto mt-10 grid w-full max-w-[1400px] items-start gap-10 md:grid-cols-2 md:gap-12 lg:mt-14 lg:gap-16">
          <div className="md:pl-2 lg:pl-4">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--gold)] md:text-sm">DONATION</p>
            <h3 className="mt-3 font-serif text-2xl font-semibold leading-snug text-white md:text-3xl">
              Support Our Cause with a Donation
            </h3>
            <div className="mt-4 h-[1px] w-[200px] bg-gradient-to-r from-[var(--accent)] to-transparent" aria-hidden />
            <p className="mt-5 text-sm leading-relaxed text-white md:text-base">
              Your support helps us create lasting change. Every donation empowers communities, supports sustainability,
              and drives impactful initiatives. Together, we can build a better future through education, conservation,
              and meaningful action. Join us in making a difference today.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-white md:text-base">
              {[
                "Support meaningful change with your contribution.",
                "Make an impact with your generous support.",
                "Support our cause for a better future.",
              ].map((line) => (
                <li key={line} className="flex gap-3 leading-relaxed">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]"
                    aria-hidden
                  />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex w-full flex-col gap-3 md:ml-auto md:max-w-xl md:gap-4">
            <div className="relative aspect-[16/7] w-full overflow-hidden rounded-2xl border border-[var(--accent)]">
              <Image
                src="/uploads/d1.png"
                alt="Community gathering at Shri Nirban Dham"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-center"
              />
            </div>
            <div className="relative aspect-[16/7] w-full overflow-hidden rounded-2xl border border-[var(--accent)]">
              <Image
                src="/uploads/d2.png"
                alt="Devotees during ceremony"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

          <div className="mx-auto mt-8 h-[1px] md:w-[1200px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent" aria-hidden />
      </section>

    </div>
  );
}
