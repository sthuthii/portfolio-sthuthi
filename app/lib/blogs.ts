import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/posts');

// FUNCTION 1: Get every post (Used by the BlogSection / Homepage)
export async function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory);
  
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug,
      metadata: data,
    };
  });

  // Sort by date so newest is first
  return allPostsData.sort((a, b) => (a.metadata.date < b.metadata.date ? 1 : -1));
}

// FUNCTION 2: Get a single post by its slug (Used by [slug]/page.tsx)
export async function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    throw new Error("Post not found");
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    metadata: data,
    content,
  };
}