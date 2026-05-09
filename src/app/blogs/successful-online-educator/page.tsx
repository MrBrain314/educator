import Link from "next/link";

export default function SuccessfulOnlineEducatorPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 text-center px-6">
      <p className="text-6xl">🚧</p>
      <h1 className="text-3xl font-black text-slate-900">
        How to become a successful online educator in 2024.
      </h1>
      <p className="text-slate-500 max-w-md">
       This page is under construction. Come back soon!
      </p>
      <Link href="/#blog">
        <button className="relative overflow-hidden bg-orange-500 text-white font-bold px-8 py-4 rounded-lg group uppercase tracking-wider text-sm">
          <span className="relative z-10">Back to Blog</span>
          <span className="absolute inset-y-0 right-0 w-15 bg-slate-900 rounded-lg transition-all duration-500 ease-in-out group-hover:w-full" />
        </button>
      </Link>
    </main>
  );
}