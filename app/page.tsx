import Hero from "./components/Hero";
import BlogSection from "./components/blogSection";
import { getAllPosts } from "@/app/lib/blogs";
import About from "./components/about";
import TechStack from "./components/techstack";
import ProjectSection from "./components/ProjectCard";
// 1. REMOVE the Lucide import: import { Contact } from "lucide-react";
// 2. ADD your actual component import:
import ContactSection from "./contacts/page";

export default async function Home() {
  const posts = await getAllPosts();
  
  return (
    <main className="bg-black">
      <Hero />
      <About />
      <TechStack />
      <ProjectSection />
      <BlogSection allPosts={posts} />
      
      {/* 3. Use your custom component here */}
      <ContactSection /> 
    </main>
  );
}