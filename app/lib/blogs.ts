import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export interface Post {
  slug: string;
  content: string; // Add this line
  metadata: {
    title: string;
    date: string;
    excerpt: string;
  };
}

export async function getAllPosts(): Promise<Post[]> {
  if (!fs.existsSync(postsDirectory)) return [];

  const fileNames = fs.readdirSync(postsDirectory);
  
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    // matter(fileContents) returns { data: metadata, content: body }
    const { data, content } = matter(fileContents);

    return {
      slug,
      content, // Ensure content is passed here
      metadata: data as Post['metadata'],
    };
  });

  return allPostsData.sort((a, b) => (a.metadata.date < b.metadata.date ? 1 : -1));
}