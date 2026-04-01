"use client";

import Image from "next/image";

export default function DonateModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 p-4"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="flex w-full max-w-[380px] flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Donation QR Code"
      >
        <button
          onClick={onClose}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/60 bg-[#8B1538] text-white transition hover:scale-105 hover:bg-[#a11a43]"
          aria-label="Close"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 1L1 13M1 1L13 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="w-full rounded-2xl bg-[#8B1538] p-5 shadow-2xl">
          <Image
            src="/uploads/scanner.png"
            alt="Donate QR Code"
            width={600}
            height={800}
            className="h-auto w-full rounded-md object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
