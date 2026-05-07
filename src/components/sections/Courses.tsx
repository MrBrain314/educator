import Image from "next/image";
import Link from "next/link";
import { Star, Users } from "lucide-react";
import { courses } from "@/data/courses";

export default function Courses() {
  return (
    <section id="course" className="w-full py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex items-start justify-between mb-12">
          <div>
            <p className="text-blue-600 font-extrabold text-sm uppercase tracking-widest mb-4">
              Our Online Courses
            </p>
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
              Find The Right Online <br /> Course For You
            </h2>
          </div>

          <div className="shrink-0 mt-2">
            <Link href="#">
              <button className="relative overflow-hidden bg-orange-500 text-white font-bold px-8 py-4 rounded-sm group uppercase tracking-wider text-sm">
                <span className="relative z-10">View All Course</span>
                <span className="absolute inset-y-0 right-0 w-15 bg-slate-900 rounded-sm transition-all duration-500 ease-in-out group-hover:w-full" />
              </button>
            </Link>
          </div>
        </div>

        {/* Grille */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-slate-100"
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
                <Link href="#">
                  <h3 className="font-bold text-slate-900 text-lg leading-snug hover:text-orange-500 transition-colors">
                    {course.title}
                  </h3>
                </Link>

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
                    <Link href="#" className="text-sm text-slate-500 hover:text-orange-500 transition-colors">
                      {course.instructor.name}
                    </Link>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-slate-500">
                    <Star size={14} className="text-yellow-400 fill-yellow-400" />
                    <span>{course.rating} ({course.reviews})</span>
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
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}