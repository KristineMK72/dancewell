export default function Home() {
  return (
    <div className="space-y-14">
      <section className="rounded-3xl border border-white/10 bg-white/5 p-10 md:p-14">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
            Ballroom • Latin • Social Dance
          </div>

          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Dance changes everything.
          </h1>

          <p className="text-white/75 text-lg md:text-xl">
            A home for ballroom and beyond—exploring how dance supports mental
            clarity, confidence, connection, and full-body wellness.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="/benefits"
              className="rounded-full bg-white text-black px-6 py-3 font-medium hover:opacity-90 transition text-center"
            >
              Explore benefits
            </a>
            <a
              href="/get-started"
              className="rounded-full border border-white/20 px-6 py-3 text-white/90 hover:bg-white/10 transition text-center"
            >
              Get started
            </a>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-4">
        {[
          {
            title: "Mind",
            body:
              "Stress relief, mood boost, focus, and cognitive engagement—dance can be both expressive and meditative."
          },
          {
            title: "Body",
            body:
              "Cardio, balance, coordination, posture, and mobility—built through rhythm, repetition, and joy."
          },
          {
            title: "Life",
            body:
              "Connection, confidence, community—dance invites you into something bigger than a workout."
          }
        ].map((c) => (
          <div
            key={c.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h3 className="text-xl font-semibold">{c.title}</h3>
            <p className="mt-3 text-white/75">{c.body}</p>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-10">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Ballroom & Latin — made simple
        </h2>
        <p className="mt-3 text-white/75 max-w-3xl">
          Whether you’re brand new or coming back to dance, we’ll cover the
          essentials: styles, music feel, beginner steps, and how to build a
          practice habit that supports your wellbeing.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a className="rounded-full bg-white text-black px-5 py-2 text-sm font-medium" href="/ballroom">
            Explore ballroom
          </a>
          <a className="rounded-full bg-white/10 px-5 py-2 text-sm hover:bg-white/15 transition" href="/latin">
            Explore latin
          </a>
          <a className="rounded-full bg-white/10 px-5 py-2 text-sm hover:bg-white/15 transition" href="/sources">
            Read the research
          </a>
        </div>
      </section>
    </div>
  );
}
