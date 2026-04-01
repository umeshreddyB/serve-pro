"use client";

export default function Modal({ open, title, onClose, children }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="w-full max-w-lg rounded-2xl border border-zinc-800 bg-zinc-950 p-6"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-semibold">{title}</h3>
          <button
            type="button"
            className="rounded-md px-2 py-1 text-zinc-400 transition hover:text-white"
            onClick={onClose}
          >
            Close
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
