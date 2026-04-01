"use client";

import { useState } from "react";
import Image from "next/image";
import ContactForm from "./ContactForm";
import Modal from "./Modal";

export default function ContactView() {
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full px-4 py-10 md:px-8">
      <div className="text-center">
        <p className="text-[var(--gold)]">Contact Us</p>
        <h1 className="mt-1 text-3xl font-semibold">Get in Touch with us Today</h1>
      </div>

      <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-12">
        <div className="text-left">
          <h2 className="font-serif text-3xl font-bold leading-tight text-white md:text-4xl">
            Let&apos;s Keep in Touch
          </h2>
          <p className="mt-5 max-w-md font-sans text-sm leading-relaxed text-white md:text-base">
            We&apos;d love to hear from you. Whether you have questions, feedback, or need support, contact us.
          </p>
          <div className="mt-10 space-y-10">
            <div>
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gold)]">LOCATION</p>
              <p className="mt-2 font-sans text-sm text-white md:text-base">
                Bela More, Tarapith Road, Rampurhat, Birbhum
              </p>
            </div>
            <div>
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gold)]">
                CONSULTATION
              </p>
              <p className="mt-2 font-sans text-sm text-white md:text-base">+91 9835370797</p>
            </div>
            <div>
              <p className="font-sans text-sm font-medium tracking-normal text-[var(--gold)]">Email Address</p>
              <p className="mt-2 font-sans text-sm text-white md:text-base">hello@nirbhandham.org</p>
            </div>
          </div>
        </div>
        <div className="rounded border border-[#4f1b2b] bg-[#15040a] p-4">
          <ContactForm />
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="mt-4 rounded-full border border-[var(--accent)] px-4 py-1 text-xs"
          >
            Open QR
          </button>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-4 gap-3">
        {["1", "2", "1", "4"].map((x,index) => (
          <Image
            key={index}
            src={`/uploads/c${x}.png`}
            alt={`Gallery Contact`}
            width={280}
            height={180}
            className="h-48 w-full object-cover"
          />
        ))}
      </div>

      <Modal open={open} title="Donation QR" onClose={() => setOpen(false)}>
        <Image
          src="/uploads/placeholder-qr.jpg"
          alt="QR"
          width={500}
          height={700}
          className="mx-auto h-auto w-full max-w-xs"
        />
      </Modal>
    </section>
  );
}
