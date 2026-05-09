import Link from "next/link";

export default function DigitalTransformationConferencePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 text-center px-6">
      <p className="text-6xl">💻</p>

      <h1 className="text-3xl font-black text-slate-900">
        Digital Transformation Conference
      </h1>

      <p className="text-slate-500 max-w-md">
        This conference page is not yet available. Come back on
        September 20, 2026 to explore keynote sessions, speakers,
        and exclusive conference content.
      </p>

      <Link href="/#event">
        <button className="relative overflow-hidden bg-orange-500 text-white font-bold px-8 py-4 rounded-lg group uppercase tracking-wider text-sm">
          <span className="relative z-10">Back to Events</span>

          <span className="absolute inset-y-0 right-0 w-15 bg-slate-900 rounded-lg transition-all duration-500 ease-in-out group-hover:w-full" />
        </button>
      </Link>
    </main>
  );
}