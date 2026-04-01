export default function ContactForm() {
  return (
    <form className="space-y-3">
      {["Name", "Email ID", "Number", "Message"].map((field, index) => (
        <input
          key={field}
          type={index === 2 ? "tel" : "text"}
          className="w-full rounded-sm border border-[#4f1b2b] bg-[#2a0913] px-3 py-2 text-sm outline-none transition focus:border-[var(--accent)]"
          placeholder={field}
        />
      ))}
      <button
        type="button"
        className="rounded-full bg-[var(--accent)] px-5 py-1.5 text-xs font-semibold transition hover:opacity-90"
      >
        Send Message
      </button>
    </form>
  );
}
