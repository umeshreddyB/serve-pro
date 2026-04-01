export const metadata = {
  title: "Privacy Policy | Nirbhandham",
};

export default function PrivacyPage() {
  return (
    <section className="w-full px-4 py-10 md:px-8">
      <h1 className="text-center text-3xl font-semibold text-[var(--gold)]">Privacy Policy</h1>
      <div className="mx-auto mt-6 max-w-4xl space-y-5 text-center text-sm text-zinc-200">
        <div>
          <h2 className="text-xl font-semibold">Our Commitment to Your Privacy</h2>
          <p className="mt-2">At Nirbhan Dham, we value and protect your privacy. This policy explains how we collect, use and safeguard your personal information.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">What Information We Collect</h2>
          <p className="mt-2">We collect personal details such as your name, email and phone number only when voluntarily shared through forms, registrations or donations.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">How We Use Your Information</h2>
          <p className="mt-2">Information is used to process requests, communicate about initiatives, and improve services. We do not sell your data.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Cookies and Tracking</h2>
          <p className="mt-2">Cookies may be used to improve user experience and basic analytics. You can disable cookies in browser settings.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Contact Us</h2>
          <p className="mt-2">If you have any questions, email us at hello@nirbhandham.org.</p>
        </div>
      </div>
    </section>
  );
}
