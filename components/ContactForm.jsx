export default function ContactForm() {
  return (
    <form className="flex flex-col space-y-6">
      {["Name", "Email ID", "Number", "Message"].map((field) => (
        <div key={field} className="flex flex-col space-y-2">
          <label className="font-serif text-[15px] font-bold text-zinc-200">{field}</label>
          {field === "Message" ? (
             <textarea className="w-full rounded-md border-none bg-[#635154] px-4 py-2.5 text-white outline-none focus:ring-1 focus:ring-[var(--accent)] resize-none h-12" />
          ) : (
            <input
              type={field === "Number" ? "tel" : "text"}
              className="w-full rounded-md border-none bg-[#635154] px-4 py-2.5 text-white outline-none focus:ring-1 focus:ring-[var(--accent)]"
            />
          )}
        </div>
      ))}
      <div className="flex w-full justify-center pt-2">
        <button
          type="button"
          className="rounded-full bg-[#8B1538] px-8 py-2 font-serif text-sm font-semibold text-white transition hover:bg-[#a11a43] shadow-sm tracking-wide"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
