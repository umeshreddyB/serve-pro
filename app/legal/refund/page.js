export const metadata = {
  title: "Refund Policy | Nirbhandham",
};

export default function RefundPage() {
  return (
    <section className="w-full px-4 py-10 md:px-8">
      <h1 className="text-center text-3xl font-semibold text-[var(--gold)]">Returns &amp; Refunds</h1>
      <div className="mx-auto mt-6 max-w-4xl space-y-4 text-center text-sm text-zinc-200">
        <h2 className="text-lg font-semibold">1. Spiritual Contributions & Donations</h2>
        <p>Donations are generally non-refundable as they are directly used for community and spiritual services.</p>
        <h2 className="text-lg font-semibold">2. Physical Products (if applicable)</h2>
        <p>If you receive damaged or incorrect items, you can request a replacement or refund within 7 days.</p>
        <h2 className="text-lg font-semibold">3. Event Bookings</h2>
        <p>Registration fees are usually non-refundable unless the event is cancelled by organizers.</p>
        <h2 className="text-lg font-semibold">4. Requesting a Refund</h2>
        <p>Please contact support with transaction details at hello@nirbhandham.org for review.</p>
        <h2 className="text-lg font-semibold">5. Processing Time</h2>
        <p>Approved refunds are typically processed within 7-10 business days.</p>
      </div>
    </section>
  );
}
