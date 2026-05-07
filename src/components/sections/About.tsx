import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

const points = [
  "Learn from world-class instructors and industry experts who bring real experience to every lesson.",
  "Access hundreds of courses across multiple disciplines, available anytime and anywhere you need.",
  "Earn recognized certificates that boost your career and validate your skills to employers.",
];

export default function About() {
  return (
    <section id="about" className="w-full py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* ---- Colonne gauche — image ---- */}
        <div className="relative flex justify-center items-center min-h-[420px]">
          {/* Background shape */}
          <Image
            src="/images/about-img-bg.png"
            alt=""
            width={480}
            height={480}
            className="object-contain"
          />

          {/* Image principale */}
          <div className="absolute inset-0 flex justify-center items-end z-10">
            <Image
              src="/images/about-img.png"
              alt="About us"
              width={380}
              height={420}
              className="object-contain"
            />
          </div>

          {/* Icône flottante 1 */}
          <div className="absolute top-[20%] left-0 z-20 animate-[zigzag_4s_ease-in-out_infinite]">
            <Image
              src="/images/banner-aliment-icon-1.png"
              alt=""
              width={220}
              height={90}
            />
          </div>

          {/* Icône flottante 2 */}
          <div className="absolute bottom-[10%] left-4 z-20 animate-[zigzag_4s_ease-in-out_infinite_0.5s]">
            <Image
              src="/images/banner-aliment-icon-3.png"
              alt=""
              width={180}
              height={75}
            />
          </div>
        </div>

        {/* ---- Colonne droite — contenu ---- */}
        <div className="flex flex-col gap-6">
          {/* Subtitle */}
          <p className="text-blue-600 font-extrabold text-lg uppercase tracking-widest">
            About Us
          </p>

          {/* Titre */}
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
            We Have Best Online Education
          </h2>

          {/* Texte */}
          <p className="text-slate-500 text-base leading-relaxed">
            We believe education should be accessible to everyone. Our platform
            connects passionate learners with expert instructors from around the
            world, offering a flexible and engaging learning experience designed
            to help you grow personally and professionally.
          </p>

          {/* Liste de points */}
          <ul className="flex flex-col gap-4">
            {points.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle
                  size={22}
                  className="text-orange-500 shrink-0 mt-0.5"
                  fill="red"
                  color="white"
                />
                <p className="text-slate-700 font-semibold">{point}</p>
              </li>
            ))}
          </ul>

          {/* Bouton CTA */}
          <div className="mt-2">
            <Link href="#course">
              <button className="relative overflow-hidden bg-orange-500 text-white font-semibold px-10 py-5 rounded-sm group uppercase tracking-wide text-sm">
                <span className="relative z-10">Explore More</span>

                <span className="absolute inset-y-0 right-0 w-20 bg-slate-900 rounded-sm transition-all duration-500 ease-in-out group-hover:w-full" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
