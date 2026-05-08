import Image from "next/image";
import { features } from "@/data/features";

export default function Features() {
  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-2">

      {/* ---- Colonne gauche — fond bleu foncé ---- */}
      <div className="bg-slate-900 px-12 py-16 lg:py-24 flex flex-col gap-8 justify-center">

        <div>
          <p className="text-blue-500 font-extrabold text-lg uppercase tracking-widest mb-4">
            Core Features
          </p>
          <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight">
            See What Our Mission Are
          </h2>
        </div>

        <ul className="flex flex-col gap-8">
          {features.map((feature) => (
            <li key={feature.id} className="flex items-start gap-5">

              <div className={`shrink-0 w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center`}>
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-white text-lg">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.text}</p>
              </div>

            </li>
          ))}
        </ul>

      </div>

      {/* ---- Colonne droite — image pleine hauteur ---- */}
      <div className="relative min-h-[400px] lg:min-h-full">
        <Image
          src="/images/coure-features-img.jpg"
          alt="Core features"
          fill
          className="object-cover"
        />
      </div>

    </section>
  );
}