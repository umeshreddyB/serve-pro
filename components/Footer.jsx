import Link from "next/link";
import Image from "next/image";

const legalLinks = [
  { label: "Disclaimer", href: "/legal/disclaimer" },
  { label: "Privacy", href: "/legal/privacy" },
  { label: "Terms of use", href: "/legal/terms" },
  { label: "Cookie Policy", href: "/legal/privacy" },
  { label: "Returns &", href: "/legal/refund" },
  { label: "Refunds", href: "/legal/refund" },
];

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="mx-auto w-full max-w-6xl border-t border-[#5b1224] px-6 pb-8 pt-10 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.3fr_0.8fr_1fr] md:gap-12">
          <div>
            <div className="flex gap-2">
              <Image src={`/uploads/footer.png`} alt="footer logo" width={100} height={140} className="h-15 w-15 rounded-full border border-[var(--accent)] text-[var(--accent)]" />
              
            <Image
              src="/uploads/mainlogo.png"
              alt="Nirban Dham"
              width={220}
              height={56}
              className="h-auto w-[190px] object-contain md:w-[220px]"
            />
            </div>

            <p className="mt-5 max-w-md font-serif text-[18px] leading-[1.45] text-zinc-200">
              Nirban Dham is a sacred space for seekers on the path of self-realization and inner peace. Rooted in timeless wisdom and guided spiritual practice, we offer a sanctuary for the soul to awaken, evolve, and experience true liberation.
            </p>
          </div>

          <div className="pt-1">
            <nav className="grid gap-3 font-serif text-[18px] leading-none text-zinc-200">
              {legalLinks.map((item) => (
                <Link key={`${item.label}-${item.href}`} href={item.href} className="transition-colors hover:text-white">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="pt-1">
            <h4 className="font-serif text-[30px] font-semibold uppercase tracking-[0.02em] text-zinc-100">OFFICE CONTACT</h4>
            <p className="mt-4 font-serif text-[18px] leading-[1.4] text-zinc-200">
              Beliya Gram, Tarapith, PIN, Rampurhat
              <br />
              West Bengal 731224, IN
            </p>
            <div className="mt-5 space-y-3">
              <p className="flex items-center gap-3 font-serif text-[18px] text-zinc-200">
                <Image src="/uploads/ic6.png" alt="Email icon" width={22} height={22} className="h-[22px] w-[22px] object-contain" />
                hello@nirbandham.org
              </p>
              <p className="flex items-center gap-3 font-serif text-[18px] text-zinc-200">
                <Image src="/uploads/ic5.png" alt="Phone icon" width={22} height={22} className="h-[22px] w-[22px] object-contain" />
                +91 9883376407
              </p>
            </div>
          </div>
        </div>

        <p className="mt-10 font-serif text-[18px] text-zinc-400">
          Copyright © {new Date().getFullYear()} Nirban Dham. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
