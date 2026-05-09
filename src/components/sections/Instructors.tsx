"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { instructors } from "@/data/instructors";

export default function Instructors() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section id="instructors" className="w-full py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-blue-600 font-extrabold text-lg uppercase tracking-widest mb-4">
            Best Coach
          </p>
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900">
            Our Expert Instructor
          </h2>
        </div>

        {/* Grille */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor) => {
            const isActive = activeId === instructor.id;

            return (
              <div
                key={instructor.id}
                className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden cursor-pointer"
                onClick={() => setActiveId(isActive ? null : instructor.id)}
              >

                {/* Image + réseaux sociaux */}
                <div className="relative">
                  <Image
                    src={instructor.image}
                    alt={instructor.name}
                    width={300}
                    height={300}
                    className="w-full h-56 object-cover object-top"
                  />

                  {/* Réseaux sociaux - hover sur desktop, tap sur mobile */}
                  <div className={`absolute bottom-0 left-0 right-0 flex items-center justify-center gap-2 px-4 py-3 transition-opacity duration-300
                    ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                  >
                    <Link
                      href={instructor.social.facebook}
                      onClick={(e) => e.stopPropagation()}
                      className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                    >
                      <FaFacebook size={15} />
                    </Link>
                    <Link
                      href={instructor.social.instagram}
                      onClick={(e) => e.stopPropagation()}
                      className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-pink-500 transition-colors"
                    >
                      <FaInstagram size={15} />
                    </Link>
                    <Link
                      href={instructor.social.twitter}
                      onClick={(e) => e.stopPropagation()}
                      className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-sky-500 transition-colors"
                    >
                      <FaTwitter size={15} />
                    </Link>
                  </div>
                </div>

                {/* Nom + titre */}
                <div className="p-4 text-center">
                  <h3 className={`font-bold transition-colors duration-300 text-lg
                    ${isActive ? "text-orange-500" : "text-slate-900 group-hover:text-orange-500"}`}
                  >
                    {instructor.name}
                  </h3>
                  <p className="text-blue-500 text-sm mt-1">{instructor.title}</p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}