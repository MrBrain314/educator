import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/About";
import Category from "@/components/sections/Category";
import Courses from "@/components/sections/Courses";
import Header from "@/components/sections/Header";
import Event from "@/components/sections/Event";
import Features from "@/components/sections/Features";
import Instructors from "@/components/sections/Instructors";
import Testimonials from "@/components/sections/Testimonials";
import Blog from "@/components/sections/Blog";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Header />
      <Category />
      <About />
      <Courses />
      <Event />
      <Features />
      <Instructors />
      <Testimonials />
      <Blog />
    </main>
  );
}