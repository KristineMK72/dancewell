export default function BallroomPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-semibold">Ballroom</h1>
      <p className="text-white/75 max-w-3xl">
        Classic partner dances focused on frame, connection, and smooth travel.
        We’ll build out beginner-friendly guides for each style.
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        {["Waltz", "Tango", "Foxtrot", "Viennese Waltz", "Quickstep"].map(
          (d) => (
            <div
              key={d}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-xl font-semibold">{d}</h3>
              <p className="mt-2 text-white/70">
                Coming soon: music feel, beginner steps, posture/frame cues, and practice tips.
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
}
