import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DanceWell",
  description:
    "Ballroom, Latin, and social dance—supporting mental clarity, confidence, and full-body wellness."
};

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="rounded-full px-4 py-2 text-sm text-white/90 hover:bg-white/10 transition"
    >
      {label}
    </a>
  );
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen">
          <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10">
            <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
              <a href="/" className="font-semibold tracking-tight">
                Dance<span className="text-white/70">Well</span>
              </a>
              <nav className="hidden md:flex items-center gap-1">
                <NavLink href="/benefits" label="Benefits" />
                <NavLink href="/ballroom" label="Ballroom" />
                <NavLink href="/latin" label="Latin" />
                <NavLink href="/get-started" label="Get Started" />
                <NavLink href="/gallery" label="Gallery" />
                <NavLink href="/sources" label="Sources" />
              </nav>
              <a
                href="/get-started"
                className="rounded-full bg-white text-black px-4 py-2 text-sm font-medium hover:opacity-90 transition"
              >
                Start here
              </a>
            </div>
          </header>

          <main className="mx-auto max-w-6xl px-6 py-12">{children}</main>

          <footer className="border-t border-white/10">
            <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-white/60 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
              <div>© {new Date().getFullYear()} DanceWell</div>
              <div className="flex gap-4">
                <a className="hover:text-white" href="/sources">
                  Sources
                </a>
                <a className="hover:text-white" href="/gallery">
                  Gallery
                </a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
