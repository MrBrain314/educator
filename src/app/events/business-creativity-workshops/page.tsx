import Link from "next/link";

export default function BusinessCreativityWorkshopsPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 text-center px-6">
      <p className="text-6xl">📅</p>

      <h1 className="text-3xl font-black text-slate-900">
        Business Creativity Workshops
      </h1>

      <p className="text-slate-500 max-w-md">
        Our team is getting everything ready for this event. Come back on
        October 28, 2026 to access all workshop schedules, activities,
        and exclusive event content.
      </p>

      <Link href="/#event">
        <button className="relative overflow-hidden bg-orange-500 text-white font-bold px-8 py-4 rounded-lg group uppercase tracking-wider text-sm">
          <span className="relative z-10">Back to Events</span>

          <span className="absolute inset-y-0 right-0 w-10 bg-slate-900 rounded-lg transition-all duration-500 ease-in-out group-hover:w-full" />
        </button>
      </Link>
    </main>
  );
}