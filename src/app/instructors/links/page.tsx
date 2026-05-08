import Link from "next/link";

export default function InstructorSocialPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 text-center px-6">
      <p className="text-6xl">🔗</p>

      <h1 className="text-3xl font-black text-slate-900">
        Instructors Links Under Maintenance 
      </h1>

      <p className="text-slate-500 max-w-md">
        This social media section is currently under maintenance. Please come
        back later to access the instructor’s social platforms and updates.
      </p>

      <Link
        href="/#instructors"
        className="relative flex items-center justify-center overflow-hidden bg-orange-500 text-white font-bold uppercase tracking-wider text-sm rounded-md w-[230px] h-[60px] group"
      >
        <span className="relative z-10">Back to Instructors</span>

        <span className="absolute top-0 right-0 h-full w-[38%] bg-slate-900 rounded-l-2xl transition-all duration-500 ease-in-out group-hover:w-full group-hover:rounded-none" />
      </Link>
    </main>
  );
}