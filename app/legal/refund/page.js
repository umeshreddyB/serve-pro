export const metadata = {
  title: "Returns and Refunds | Nirbhandham",
};

export default function ReturnsRefundsPage() {
  return (
    <section className="w-full px-4 py-10 md:px-8">
      <h1 className="text-center text-3xl font-semibold text-[var(--gold)]">Returns and Refunds</h1>
      <div className="mx-auto mt-4 h-[1px] w-[200px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent" aria-hidden />

      <div className="mx-auto mt-6 max-w-4xl space-y-4 text-center text-sm text-zinc-200">

        <h2 className="text-2xl font-semibold">1. Spiritual Contributions & Donations</h2>
        <p className="text-[16px]">
          At Nirban Dham, many of our offerings are spiritual in nature — including events, volunteer-based services, and community contributions. Donations made in support of our causes are considered voluntary and non-refundable.
        </p>

        <h2 className="text-2xl font-semibold">2. Physical Products (if applicable)</h2>
        <p className="text-[16px]">
          If you purchase any physical products (e.g., books, items from our store), and the item arrives damaged or incorrect, we are happy to process a replacement or refund. Please contact us within 7 days of receiving the product, along with photo evidence if applicable.
        </p>

        <h2 className="text-2xl font-semibold">3. Event Bookings</h2>
        <p className="text-[16px]">
          Registrations for events, spiritual retreats, or seva programs are generally non-refundable. However, in the case of cancellation due to unforeseen circumstances (e.g., natural disaster, health emergency), we may offer a partial refund or the option to defer participation to a future event.
        </p>

        <h2 className="text-2xl font-semibold">4. Requesting a Refund</h2>
        <p className="text-[16px]">
          For all refund requests, please reach out to us at hello@nirbandham.org or via our Contact Page. Please include your full name, details of the transaction, and the reason for the refund request. We will respond within 5 business days.
        </p>

        <h2 className="text-2xl font-semibold">5. Processing Time</h2>
        <p className="text-[16px]">
          Once a refund is approved, the processing time may vary based on the payment method. Typically, refunds are issued within 7–10 business days.
        </p>

        <h2 className="text-2xl font-semibold">6. No Refund Policy (Donations)</h2>
        <p className="text-[16px]">
          We reiterate that all donations made toward spiritual activities, seva, or charitable causes are non-refundable. These are contributions made in good faith, and we deeply thank you for your support.
        </p>

      </div>
    </section>
  );
}
