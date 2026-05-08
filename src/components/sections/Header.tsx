import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <section
      id="home"
      className="relative w-screen bg-gradient-to-r from-blue-100 via-slate-50 to-orange-100 flex items-center overflow-hidden py-16 lg:py-24"
    >
      {/* ---- Contenu centré ---- */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* ---- Colonne gauche ---- */}
        <div className="flex flex-col gap-6">
          <p className="text-blue-600 font-black text-lg uppercase tracking-widest">
            Welcome To Online Coaching
          </p>

          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-slate-900 leading-tight">
            Get Class From Top{" "}
            <span className="relative inline-block">
              Instructor
              <Image
                src="/images/banner-line.png"
                alt=""
                width={320}
                height={12}
                className="absolute -bottom-3 left-0 w-full"
              />
            </span>
          </h1>

          <p className="text-slate-500 text-base lg:text-lg leading-relaxed max-w-md mt-4">
            Learn from experienced instructors who provide practical guidance,
            interactive lessons, and real-world skills to help you achieve your
            academic and career goals with confidence.
          </p>

          <div className="flex items-center gap-4 flex-wrap mt-2">
            <Link href="#course">
              <button className="relative overflow-hidden bg-orange-500 text-white font-semibold px-10 py-5 rounded-sm group uppercase tracking-wide text-sm">
                <span className="relative z-10">Explore Courses</span>

                <span className="absolute inset-y-0 right-0 w-15 bg-slate-900 rounded-sm transition-all duration-500 ease-in-out group-hover:w-full" />
              </button>
            </Link>

            <Link href="#contact">
              <button className="relative overflow-hidden bg-slate-900 text-white font-semibold px-10 py-5 rounded-sm group uppercase tracking-wide text-sm">
                <span className="relative z-10">Contact Us</span>

                <span className="absolute inset-y-0 right-0 w-15 bg-orange-500 rounded-sm transition-all duration-500 ease-in-out group-hover:w-full" />
              </button>
            </Link>
          </div>
        </div>

        {/* ---- Colonne droite ---- */}
        <div className="relative hidden lg:flex justify-center items-center min-h-[520px]">
          {/* Background shape */}
          <div className="absolute inset-0 flex justify-center items-center">
            <Image
              src="/images/banner-img-bg.png"
              alt=""
              width={500}
              height={500}
              className="object-contain"
            />
          </div>

          {/* Image principale */}
          <div className="relative z-10 w-[400px] h-[480px]">
            <Image
              src="/images/banner-img.png"
              alt="Student learning online"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Icône flottante 1 - Congratulations (en haut à gauche de l'image) */}
          <div className="absolute top-60 -left-0 z-20 animate-[zigzag_4s_ease-in-out_infinite]">
            <Image
              src="/images/banner-aliment-icon-1.png"
              alt=""
              width={250}
              height={100}
            />
          </div>

          {/* Icône flottante 2 - User Experience Class (à droite milieu) */}
          <div className="absolute top-95 -right-0 z-20 -translate-y-1/2 animate-[zigzag_4s_ease-in-out_infinite_1s]">
            <Image
              src="/images/banner-aliment-icon-2.png"
              alt=""
              width={240}
              height={100}
            />
          </div>

          {/* Icône flottante 3 - 578k Assisted Student (en bas) */}
          <div className="absolute bottom-8 left-4 z-20 animate-[zigzag_4s_ease-in-out_infinite_0.5s]">
            <Image
              src="/images/banner-aliment-icon-3.png"
              alt=""
              width={195}
              height={80}
            />
          </div>

          {/* Icône flottante 4 - petite icône (haut droite) */}
          <div className="absolute top-4 right-4 z-20 animate-bounce">
            <Image
              src="/images/banner-aliment-icon-4.png"
              alt=""
              width={80}
              height={80}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
