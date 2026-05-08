import Image from "next/image";
import Link from "next/link";
import { Calendar, MessageCircle } from "lucide-react";
import { blogs } from "@/data/blogs";

export default function Blog() {
  return (
    <section id="blog" className="w-full py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-blue-600 font-extrabold text-lg uppercase tracking-widest mb-4">
            Our Blog
          </p>
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900">
            Latest Blog & News
          </h2>
        </div>

        {/* Grille */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-slate-100"
            >

              {/* Image */}
              <div className="overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={400}
                  height={240}
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Contenu */}
              <div className="p-6 flex flex-col gap-4">

                {/* Titre */}
                <Link href={blog.href}>
                  <h3 className="font-bold text-slate-900 text-lg leading-snug hover:text-orange-500 transition-colors duration-300">
                    {blog.title}
                  </h3>
                </Link>

                {/* Meta — date + commentaires */}
                <div className="flex items-center gap-6 text-sm text-slate-400 pt-4 border-t border-slate-100">
                  <Link
                    href={blog.href}
                    className="flex items-center gap-2 hover:text-orange-500 transition-colors"
                  >
                    <Calendar size={14} />
                    <span>{blog.date}</span>
                  </Link>
                  <Link
                    href={blog.href}
                    className="flex items-center gap-2 hover:text-orange-500 transition-colors"
                  >
                    <MessageCircle size={14} />
                    <span>{blog.comments} Comments</span>
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}