import { getAllPosts } from "@/app/lib/blogs";
import { notFound } from "next/navigation";
import BlogClientContent from "./BlogClientContent";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const allPosts = await getAllPosts();

  const post = allPosts.find((p) => p.slug === slug);

  if (!post) {
    return notFound();
  }

  // 'post' now includes the 'content' property required by BlogClientContent
  return <BlogClientContent post={post} slug={slug} />;
}