export default function BlogPost({ params }: { params: { slug: string } }) {
  // In a real app, you'd fetch the blog data using the slug
  return (
    <div className="max-w-3xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-4 capitalize">
        {params.slug.replace(/-/g, " ")}
      </h1>
      <p className="text-gray-500">Published on January 25, 2026</p>
      <div className="mt-10 prose prose-indigo lg:prose-xl">
        <p>This is where your blog content for {params.slug} will live...</p>
      </div>
    </div>
  );
}