export default function GetStartedPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-4xl font-semibold">Get started</h1>
        <p className="text-white/75 max-w-3xl">
          You don’t need a “dancer body” or experience. You need curiosity and a first step.
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-4">
        <Card title="What to wear" body="Comfortable clothes, shoes that stay on. Smooth soles help for ballroom." />
        <Card title="Lessons vs socials" body="Lessons teach technique. Socials build confidence and real-world practice." />
        <Card title="Beginner tip" body="Aim for consistency over perfection—10 minutes of practice wins." />
      </div>
    </div>
  );
}

function Card({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-white/75">{body}</p>
    </div>
  );
}
