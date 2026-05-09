import Image from "next/image";
import Link from "next/link";
import { Star, Users } from "lucide-react";
import { courses } from "@/data/courses";

export default function Courses() {
  return (
    <section id="course" className="w-full py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-6">
          <div>
            <p className="text-blue-600 font-extrabold text-lg uppercase tracking-widest mb-4">
              Our Online Courses
            </p>
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
              Find The Right Online <br /> Course For You
            </h2>
          </div>

          <div className="shrink-0 w-full sm:w-auto">
            <Link href="/courses/courses-preparation">
              <button className="relative flex items-center justify-center overflow-hidden bg-orange-500 text-white font-bold uppercase tracking-wider text-sm rounded-md w-full sm:w-[240px] h-[64px] group">
                <span className="relative z-10">View All Course</span>
                <span className="absolute top-0 right-0 h-full w-[38%] bg-slate-900 rounded-l-2xl transition-all duration-500 ease-in-out group-hover:w-full group-hover:rounded-none" />
              </button>
            </Link>
          </div>
        </div>

        {/* Grille */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Link
              key={course.id}
              href={course.href}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 block"
            >
              {/* Image + badges */}
              <div className="relative">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={400}
                  height={220}
                  className="w-full h-52 object-cover"
                />

                <div className="absolute bottom-3 left-3 flex gap-2">
                  {course.tags.map((tag) => (
                    <span
                      key={tag.label}
                      className={`text-xs font-bold px-3 py-1 rounded-full ${
                        tag.color === "orange"
                          ? "bg-orange-500 text-white"
                          : "bg-blue-600 text-white"
                      }`}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contenu */}
              <div className="p-5 flex flex-col gap-4">
                {/* Titre */}
                <h3 className="font-bold text-slate-900 text-lg leading-snug hover:text-orange-500 transition-colors">
                  {course.title}
                </h3>

                {/* Instructeur + Rating */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <Image
                      src={course.instructor.image}
                      alt={course.instructor.name}
                      width={32}
                      height={32}
                      className="rounded-full object-cover"
                    />

                    <span className="text-sm text-slate-500">
                      {course.instructor.name}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-sm text-slate-500">
                    <Star
                      size={14}
                      className="text-yellow-400 fill-yellow-400"
                    />
                    <span>
                      {course.rating} ({course.reviews})
                    </span>
                  </div>
                </div>

                {/* Prix + inscrits */}
                <div className="flex items-center justify-between">
                  <span className="text-orange-500 font-black text-xl">
                    ${course.price}.00
                  </span>

                  <div className="flex items-center gap-1 text-sm text-slate-500">
                    <Users size={14} />
                    <span>{course.enrolled}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
