export const metadata = {
  title: "Disclaimer | Nirbhandham",
};

export default function DisclaimerPage() {
  return (
    <section className="w-full px-4 py-10 md:px-8">
      <h1 className="text-center text-3xl font-semibold text-[var(--gold)]">Disclaimer</h1>
      <div className="mx-auto mt-4 h-[1px] w-[200px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent" aria-hidden />

      <div className="mx-auto mt-6 max-w-4xl space-y-4 text-center text-sm text-zinc-200">
        <h2 className="text-2xl font-semibold">Purpose of This Website</h2>
        <p className="text-[16px]">The content provided on nirbandham.org is for general spiritual, educational, and informational purposes. While we do our best to share content that uplifts, informs, and guides, nothing on this website should be taken as professional, legal, or medical advice.</p>
        <h2 className="text-2xl font-semibold">Spiritual Content and Beliefs</h2>
        <p className="text-[16px]">
          The teachings, practices, and ideas shared through Nirban Dham reflect our traditions and spiritual perspectives. These are intended to offer insight and inspiration. Everyone is encouraged to use their own discernment and consult appropriate professionals where needed.
        </p>
        <h2 className="text-2xl font-semibold">Accuracy and Updates</h2>
        <p className="text-[16px]">
          We strive to ensure the accuracy of the content on this website, but we do not guarantee that all information is always up-to-date, complete, or without error. We may update or revise content at any time without prior notice.          </p>
        <h2 className="text-2xl font-semibold">External Links</h2>
        <p className="text-[16px]">
          Our website may contain links to other websites or resources. These links are provided for convenience and do not imply endorsement. Nirban Dham is not responsible for the content or policies of any external site.
        </p>
        <h2 className="text-2xl font-semibold">Limitation of Liability</h2>
        <p className="text-[16px]">
          By using this website, you agree that Nirban Dham shall not be held liable for any loss or damage arising from your use of the site, including but not limited to reliance on any content, materials, or links provided herein.
        </p>
        <h2 className="text-2xl font-semibold">Testimonials and Experiences</h2>
        <p className="text-[16px]">
          Any testimonials, stories, or shared experiences found on this site are the personal experiences of individuals and may not reflect the experience of others. These should not be considered guarantees or typical outcomes.
        </p>
        <h2 className="text-2xl font-semibold">Contact for Clarification</h2>
        <p className="text-[16px]">
          If you have any questions or concerns about the content of this website or the nature of our services, you are welcome to reach out to us at hello@nirbandham.org or through our Contact Page.
        </p>
      </div>
    </section>
  );
}
