export const metadata = {
  title: "Disclaimer | Nirbhandham",
};

export default function DisclaimerPage() {
  return (
    <section className="w-full px-4 py-10 md:px-8">
      <h1 className="text-center text-3xl font-semibold text-[var(--gold)]">Disclaimer</h1>
      <div className="mx-auto mt-6 max-w-4xl space-y-4 text-center text-sm text-zinc-200">
        <h2 className="text-lg font-semibold">Purpose of This Website</h2>
        <p>The content on this website is for general spiritual, informational and charitable guidance only.</p>
        <h2 className="text-lg font-semibold">Spiritual Content and Beliefs</h2>
        <p>Spiritual experiences are subjective. We encourage everyone to follow their own path with discernment.</p>
        <h2 className="text-lg font-semibold">Accuracy and Updates</h2>
        <p>We strive for accuracy but do not guarantee all details are complete or current at all times.</p>
        <h2 className="text-lg font-semibold">Traditional and Experience</h2>
        <p>Any testimonials are individual experiences and should not be treated as guaranteed outcomes.</p>
        <h2 className="text-lg font-semibold">Contact for Clarification</h2>
        <p>For any clarification, contact hello@nirbhandham.org.</p>
      </div>
    </section>
  );
}
