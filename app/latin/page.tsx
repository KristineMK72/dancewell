export default function LatinPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-semibold">Latin</h1>
      <p className="text-white/75 max-w-3xl">
        Rhythmic, expressive partner dances—great for confidence, cardio, and musicality.
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        {["Cha Cha", "Rumba", "Samba", "Jive", "Paso Doble"].map((d) => (
          <div
            key={d}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h3 className="text-xl font-semibold">{d}</h3>
            <p className="mt-2 text-white/70">
              Coming soon: timing, basic step, body action notes, and song examples.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
