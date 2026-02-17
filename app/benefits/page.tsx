export default function BenefitsPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-4xl font-semibold">Benefits of dance</h1>
        <p className="text-white/75 max-w-3xl">
          Dance blends movement, music, learning, and connection—making it one
          of the most complete “whole human” activities.
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-4">
        <Card
          title="Mental & emotional"
          items={[
            "Stress relief and mood support",
            "Mindfulness through music + movement",
            "Confidence and self-expression",
            "Cognitive engagement (learning patterns, timing)"
          ]}
        />
        <Card
          title="Physical"
          items={[
            "Cardio and endurance",
            "Balance, coordination, and stability",
            "Posture, mobility, and flexibility",
            "Strength through controlled movement"
          ]}
        />
        <Card
          title="Social"
          items={[
            "Connection and community",
            "Touch, teamwork, and trust (partner dance)",
            "Shared goals and accountability",
            "Belonging and joy"
          ]}
        />
      </div>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-semibold">Want the receipts?</h2>
        <p className="mt-2 text-white/75">
          We keep a curated list of reputable sources and studies.
        </p>
        <a
          href="/sources"
          className="mt-5 inline-block rounded-full bg-white text-black px-5 py-2 text-sm font-medium"
        >
          Go to Sources
        </a>
      </section>
    </div>
  );
}

function Card({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-xl font-semibold">{title}</h3>
      <ul className="mt-4 space-y-2 text-white/75 list-disc pl-5">
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}
