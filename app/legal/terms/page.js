export const metadata = {
  title: "Terms | Nirbhandham",
};

export default function TermsPage() {
  return (
    <section className="w-full px-4 py-10 md:px-8">
      <h1 className="text-center text-3xl font-semibold text-[var(--gold)]">Terms of Use</h1>
      <div className="mx-auto mt-6 max-w-4xl space-y-4 text-center text-sm text-zinc-200">
        <h2 className="text-lg font-semibold">1. Acceptance of Terms</h2>
        <p>By accessing this website, you agree to be bound by these Terms of Use.</p>
        <h2 className="text-lg font-semibold">2. About Nirbhan Dham</h2>
        <p>Nirbhan Dham is a spiritual and charitable initiative focused on service and awareness.</p>
        <h2 className="text-lg font-semibold">3. Use of Website</h2>
        <p>You must use this website lawfully and respectfully, without engaging in harmful activity.</p>
        <h2 className="text-lg font-semibold">4. Intellectual Property Rights</h2>
        <p>All text, images and media on this site are owned by or licensed to Nirbhan Dham unless otherwise stated.</p>
        <h2 className="text-lg font-semibold">5. Third-Party Links</h2>
        <p>External links are provided for convenience. We are not responsible for third-party content.</p>
        <h2 className="text-lg font-semibold">6. Limitation of Liability</h2>
        <p>We do our best to ensure accurate information but cannot guarantee completeness at all times.</p>
        <h2 className="text-lg font-semibold">7. Changes to the Terms</h2>
        <p>We may update these terms periodically. Continued use of the site constitutes your acceptance.</p>
      </div>
    </section>
  );
}
