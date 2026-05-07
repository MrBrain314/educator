import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import { events } from "@/data/events";

export default function Event() {
  return (
    <section className="w-full py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* ---- Colonne gauche - image + bouton play ---- */}
        <div className="relative flex flex-col">
          <Image
            src="/images/event-img.jpg"
            alt="Event"
            width={540}
            height={460}
            className="w-full rounded-2xl object-cover shadow-lg"
          />

          {/* Bouton Watch Us - en bas de l'image */}
          <Link
            href="#"
            className="absolute bottom-4 left-4 flex items-center gap-3 bg-orange-500 rounded-full px-5 py-3 shadow-xl animate-[zigzag_4s_ease-in-out_infinite]"
          >
            <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center shrink-0">
              <Play
                size={14}
                className="text-orange-500 ml-0.5"
                fill="orange"
              />
            </div>
            <span className="font-bold text-white">Watch Us !</span>
          </Link>
        </div>

        {/* ---- Colonne droite - events ---- */}
        <div className="flex flex-col gap-8">
          <div>
            <p className="text-blue-600 font-extrabold text-lg uppercase tracking-widest mb-4">
              Our Events
            </p>
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
              Join Our Upcoming Events
            </h2>
          </div>

          <ul className="flex flex-col gap-4">
            {events.map((event) => (
              <li
                key={event.id}
                className="flex items-center gap-6 bg-white rounded-xl p-5 shadow-sm border border-slate-100"
              >
                {/* Date - jour + mois en bleu */}
                <div className="shrink-0 text-center min-w-[56px]">
                  <p className="text-2xl font-black text-blue-600 leading-none">
                    {event.day}
                  </p>
                  <p className="text-xs font-semibold text-blue-400 mt-1">
                    {event.month}
                  </p>
                </div>

                {/* Séparateur vertical */}
                <div className="w-px h-12 bg-slate-200 shrink-0" />

                {/* Contenu */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span>{event.time}</span>
                    <span>|</span>
                    <span>{event.place}</span>
                  </div>
                  <Link
                    href="#"
                    className="font-bold text-slate-800 hover:text-orange-500 transition-colors text-base"
                  >
                    {event.title}
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
