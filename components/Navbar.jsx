"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation } from "@/data/navigation";
import Image from "next/image";

const navLinkClass = (active) =>
  `whitespace-nowrap transition-colors ${active ? "text-white" : "text-white/85 hover:text-white"}`;

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-black">
      <div className="mx-auto max-w-[1600px] px-[5vw] py-3.5 md:py-4 lg:px-[6vw]">
        {/* Desktop / tablet: logo | centered links | donate */}
        <div className="hidden w-full grid-cols-[1fr_auto_1fr] items-center gap-4 md:grid">
          <div className="min-w-0 justify-self-start">
            <Link href="/" className="inline-block">
              <Image
                src="/uploads/mainlogo.png"
                alt="Nirban Dham"
                width={280}
                height={72}
                priority
                className="h-9 w-auto max-h-9 object-contain object-left md:h-10 md:max-h-[40px]"
              />
            </Link>
          </div>

          <nav className="flex items-center justify-center gap-5 font-serif text-[13px] text-white lg:gap-9 lg:text-sm" aria-label="Primary">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className={navLinkClass(pathname === item.href)}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex min-w-0 justify-end">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#8B1538] px-6 py-2 font-serif text-sm font-normal text-white transition-opacity hover:opacity-90"
            >
              Donate
            </Link>
          </div>
        </div>

        {/* Mobile: logo + menu */}
        <div className="flex items-center justify-between md:hidden">
          <Link href="/" className="inline-block shrink-0">
            <Image
              src="/uploads/mainlogo.png"
              alt="Nirban Dham"
              width={280}
              height={72}
              priority
              className="h-9 w-auto max-h-9 object-contain object-left"
            />
          </Link>
          <button
            type="button"
            className="rounded-md border border-zinc-600 px-3 py-1.5 font-serif text-xs text-white"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            Menu
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-zinc-900 px-[5vw] py-4 md:hidden" aria-label="Mobile">
          <div className="flex flex-col gap-4 font-serif text-sm text-white">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={navLinkClass(pathname === item.href)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex w-fit items-center rounded-full bg-[#8B1538] px-6 py-2 text-white"
            >
              Donate
            </Link>
          </div>
        </nav>
      ) : null}

      <div className="h-px w-full bg-zinc-900" aria-hidden />
    </header>
  );
}
