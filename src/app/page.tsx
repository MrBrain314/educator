import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/About";
import Category from "@/components/sections/Category";
import Courses from "@/components/sections/Courses";
import Header from "@/components/sections/Header";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Header />
      <Category />
      <About />
      <Courses />
    </main>
  );
}