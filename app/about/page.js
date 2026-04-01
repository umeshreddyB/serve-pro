import Image from "next/image";

export const metadata = {
  title: "About | Nirbhandham",
};



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


export default function AboutPage() {
  return (
    <section className="w-full px-4 py-10 md:px-8">
      <div className="bg-black px-4 py-14 text-center md:px-8 md:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="font-serif text-xs font-semibold uppercase tracking-[0.22em] text-[var(--gold)] md:text-sm">
            About Us
          </p>
          <p className="mt-4 font-serif text-base font-normal text-white md:mt-5 md:text-lg">The Story Behind</p>
          <h1 className="mt-4 font-serif text-3xl font-bold leading-tight text-white md:mt-5 md:text-4xl lg:text-[2.5rem] lg:leading-snug">
            Our Journey: From Sacred Roots to a Thriving Community
          </h1>
        </div>

        <div className="about-story-fade mx-auto mt-12 max-w-4xl space-y-7 text-center font-serif text-base leading-[1.8] text-white md:text-lg">
          <p>
            In the heart of Bengal, not far from the sacred grounds of Tarapith, there exists a place untouched by the rush of
            the modern world—a sanctuary where the soul finds its way home. This is{" "}
            <strong className="font-semibold text-white">Shri Nirban Dham</strong>, a spiritual retreat that stands as a
            testament to the journey of self-realization and divine awakening.
          </p>
          <p>
            Years ago, under the sacred guidance of{" "}
            <strong className="font-semibold text-white">
              Ativarnashrami Kaula Avadhut Shri Shri Uttam Khyapa Maharaj
            </strong>
            , a vision took shape. It was not just about building an ashram but creating a{" "}
            <strong className="font-semibold text-white">
              sacred space where seekers could break free from worldly illusions and step onto the path of true enlightenment.
            </strong>
          </p>
          <p>
            The journey was never easy. The land that now vibrates with divine energy was once just another piece of earth.
            But with devotion, discipline, and an unshakable belief in the pursuit of{" "}
            <strong className="font-semibold text-white">Atma Saakshaatkaar</strong> (self-realization), it was transformed
            into a spiritual refuge.
          </p>
          <p>
            Here, seekers from all walks of life arrive—some weary from the struggles of existence, some lost in the chaos
            of material desires, and some simply searching for meaning.{" "}
            <strong className="font-semibold text-white">But all who enter Shri Nirban Dham leave changed.</strong> Through
            ancient rituals, meditative practices, and the timeless wisdom passed down through the Kaula and Avadhut
            traditions, they awaken to a reality beyond the physical.
          </p>
          <p>
            In the stillness of the ashram, where the air carries the echoes of sacred chants and the scent of burning
            incense lingers, something remarkable happens.{" "}
            <strong className="font-semibold text-white">
              The restless mind slows, the burdens of the past fade, and the eternal truth of one&apos;s existence becomes
              clear.
            </strong>
          </p>
          <p>
            But Shri Nirban Dham is more than a retreat—it is a community, a movement, a call to rediscover the boundless
            divinity that lies within each of us.{" "}
            <strong className="font-semibold text-white">
              It is a place where transformation is not just possible but inevitable.
            </strong>
          </p>
          <p>
            As the sun sets over the ashram, casting golden hues upon its walls, a quiet realization dawns—
            <strong className="font-semibold text-white">
              this is not just a place on a map. This is a passage to something greater.
            </strong>
          </p>
          <p>
            Welcome to Shri Nirban Dham.{" "}
            <strong className="font-semibold text-white">Your journey home begins here.</strong>
          </p>
        </div>
      </div>
      <section className="border-t border-zinc-900 bg-black px-4 py-12 md:px-8 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-start md:gap-12 lg:gap-14">
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
            <div className="mt-4 h-px w-full max-w-[220px] bg-[#8B1538]" aria-hidden />
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
        <p className="mx-auto mt-5 max-w-3xl font-sans text-sm leading-relaxed text-white md:text-base">
          Shri Nirban Dham is a place where spirituality meets serenity. Through ancient wisdom, devotional practices, and
          selfless service, we create an environment for spiritual seekers to connect with their higher selves. Whether
          through meditation, rituals, or teachings, the ashram serves as a guiding light for those on the path of
          enlightenment and inner peace.
        </p>
      </section>

      <section className="bg-black px-4 pb-14 pt-4 md:px-8 md:pb-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
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

      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-8 md:px-8 md:py-10">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent" aria-hidden />
        <span className="shrink-0 font-serif text-2xl text-[var(--accent)] md:text-3xl" aria-hidden>
          ॐ
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent" aria-hidden />
      </div>

      <div className="bg-[#151515] py-6 text-center">
        <h3 className="text-2xl font-semibold">Purpose and Goals</h3>
        <p className="mx-auto mt-2 max-w-3xl text-sm text-zinc-300">
          We strive to offer spiritual growth, sustainability and social service opportunities through inclusive and meaningful initiatives.
        </p>
      </div>
    </section>
  );
}
