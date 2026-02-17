const sources = [
  {
    category: "Physical activity & health (foundations)",
    items: [
      {
        title: "WHO — Physical activity overview",
        note: "High-level guidance on physical activity benefits and recommendations."
      },
      {
        title: "CDC — Physical activity benefits",
        note: "Overview of how movement supports health outcomes."
      }
    ]
  },
  {
    category: "Dance-specific research (add studies here)",
    items: [
      {
        title: "Add peer-reviewed studies (PubMed/NIH)",
        note:
          "We’ll build this section with ballroom/balance, cognition, depression/anxiety, and fall prevention studies."
      }
    ]
  }
];

export default function SourcesPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-4xl font-semibold">Sources</h1>
        <p className="text-white/75 max-w-3xl">
          A curated list of reputable organizations and peer-reviewed research
          supporting the mental, physical, and social benefits of dance.
        </p>
      </header>

      <div className="space-y-6">
        {sources.map((section) => (
          <section
            key={section.category}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h2 className="text-xl font-semibold">{section.category}</h2>
            <ul className="mt-4 space-y-3">
              {section.items.map((s) => (
                <li key={s.title} className="text-white/80">
                  <div className="font-medium">{s.title}</div>
                  <div className="text-white/60 text-sm">{s.note}</div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/75">
        Want me to populate this with 15–25 real citations and short summaries?
        I can, and we’ll keep them organized by topic.
      </div>
    </div>
  );
}
