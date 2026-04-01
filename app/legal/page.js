import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";

const legalPages = [
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Terms & Conditions", href: "/legal/terms" },
  { label: "Refund Policy", href: "/legal/refund" },
  { label: "Disclaimer", href: "/legal/disclaimer" },
];

export const metadata = {
  title: "Legal | Nirbhandham",
};

export default function LegalIndexPage() {
  return (
    <section className="w-full px-4 py-16 md:px-6">
      <SectionTitle
        eyebrow="Legal"
        title="Policies and disclosures"
        description="Review our legal pages for terms, privacy, and related policy details."
      />
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {legalPages.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-5 transition hover:border-red-500"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
