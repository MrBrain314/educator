import Image from "next/image";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="w-full py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* ---- Colonne gauche ---- */}
        <div className="flex flex-col gap-6">
          <p className="text-blue-600 font-extrabold text-lg uppercase tracking-widest">
            Testimonial
          </p>
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
            What Our Client Says About Us
          </h2>
          <p className="text-slate-500 text-base leading-relaxed">
            Thousands of learners have transformed their careers through our platform. From beginners to professionals, our courses have helped people worldwide gain the skills they need to succeed in today&apos;s competitive job market.
          </p>
        </div>

        {/* ---- Colonne droite — carte témoignage ---- */}
        <div className="flex flex-col gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="relative bg-white rounded-2xl p-8 shadow-md border border-slate-100 overflow-hidden"
            >

              {/* Texte */}
              <p className="text-slate-600 leading-relaxed mb-8">
                &quot;{t.text}&quot;
              </p>

              {/* Client + quote icon */}
              <div className="flex items-center justify-between">

                <div className="flex items-center gap-4">
                  {/* Image avec bordure orange */}
                  <div className="border-2 border-orange-500 rounded-xl overflow-hidden w-16 h-16 shrink-0">
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">{t.name}</h4>
                    <p className="text-sm text-orange-500 font-semibold">{t.title}</p>
                  </div>
                </div>

                {/* Quote icon en bas à droite */}
                <Quote
                  size={52}
                  className="text-orange-200 shrink-0"
                  fill="#fed7aa"
                />

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}