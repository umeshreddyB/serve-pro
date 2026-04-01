import Image from "next/image";
import Card from "./Card";

export default function InitiativeCard({ initiative }) {
  return (
    <Card className="space-y-4">
      <Image
        src={initiative.image}
        alt={initiative.title}
        width={900}
        height={550}
        className="h-44 w-full rounded-xl object-cover"
      />
      <h3 className="text-xl font-semibold">{initiative.title}</h3>
      <p className="text-zinc-400">{initiative.description}</p>
    </Card>
  );
}
