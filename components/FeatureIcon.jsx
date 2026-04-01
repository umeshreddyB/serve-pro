export default function FeatureIcon({ icon }) {
  return (
    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-red-600/20 text-red-500">
      <span className="text-lg">{icon}</span>
    </div>
  );
}
