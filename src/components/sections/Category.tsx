import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/categories";

export default function Category() {
  return (
    <section id="categories" className="w-full mt-8 pt-0 pb-16 lg:pt-12 lg:pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-blue-600 font-extrabold text-lg uppercase tracking-widest mb-4">
            Course Category
          </p>
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900">
            Explore Popular Courses
          </h2>
        </div>

        {/* Grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <li key={cat.id}>
              <Link
                href={cat.href}
                className="group flex items-center gap-4 border border-slate-700 rounded-lg p-6 transition-all duration-300 hover:bg-orange-500 hover:border-orange-500 hover:shadow-lg"
              >
                {/* Icon */}
                <div className="relative w-14 h-14 shrink-0">
                  <Image
                    src={cat.icon}
                    alt={cat.title}
                    fill
                    className="object-contain transition-opacity duration-300 group-hover:opacity-0"
                  />
                  <Image
                    src={cat.iconWhite}
                    alt={cat.title}
                    fill
                    className="object-contain transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  />
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-bold text-slate-900 group-hover:text-white transition-colors duration-300">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-slate-500 group-hover:text-orange-100 transition-colors duration-300 mt-1">
                    {cat.subtitle}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}