import About from "./components/about";
import BlogSection from "./components/blogSection";
import Hero from "./components/Hero";
import TechStack from "./components/techstack";
import Contact from "./contacts/page";
import ProjectSection from "./components/ProjectCard";


export default function Home() {
  return (
    <main className = "flex flex-col items-center justify-center min-h-screen py-2">
      <Hero/>
      <About/>
      <TechStack/>
      <ProjectSection/>
      <BlogSection/>
      <Contact/>
    </main>
  );
}
