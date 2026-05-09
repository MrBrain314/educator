import Link from "next/link";

export default function OurSocialMediaPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 text-center px-6">
      <p className="text-6xl">🔗</p>

      <h1 className="text-3xl font-black text-slate-900">
        Our Social Media Links Are Under Maintenance
      </h1>

      <p className="text-slate-500 max-w-md">
        We are currently improving our social media section. 
        Please return later to discover new content, announcements, 
        and community highlights.
      </p>

      <Link
        href="/#contact"
        className="relative flex items-center justify-center overflow-hidden bg-orange-500 text-white font-bold uppercase tracking-wider text-sm rounded-md w-[230px] h-[60px] group"
      >
        <span className="relative z-10">Back to Our Contact</span>

        <span className="absolute top-0 right-0 h-full w-[38%] bg-slate-900 rounded-l-2xl transition-all duration-500 ease-in-out group-hover:w-full group-hover:rounded-none" />
      </Link>
    </main>
  );
}