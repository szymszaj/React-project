import { fetchOneEntry, isPreviewing } from "@builder.io/sdk-react";
import { RenderBuilderContent } from "@/components/RenderBuilderContent";
import { notFound } from "next/navigation";

export const revalidate = 60;

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PostPageProps) {
  const { slug } = await params;

  const post = await fetchOneEntry({
    model: "blog-post",
    apiKey: process.env.NEXT_PUBLIC_BUILDER_API_KEY!,
    query: {
      "data.slug": slug,
    },
  });

  if (!post && !isPreviewing()) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      {post?.data && (
        <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 text-indigo-300 text-sm mb-6">
              {post.data.author && <span>{post.data.author}</span>}
              {post.data.publishDate && (
                <>
                  {post.data.author && <span>·</span>}
                  <span>
                    {new Date(post.data.publishDate).toLocaleDateString(
                      "pl-PL",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      },
                    )}
                  </span>
                </>
              )}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {post.data.title ?? "Post"}
            </h1>
            {post.data.description && (
              <p className="text-slate-300 text-xl">{post.data.description}</p>
            )}
          </div>
        </div>
      )}
      {post?.data?.coverImage && (
        <div className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
          <img
            src={post.data.coverImage}
            alt={post.data.title ?? "Cover"}
            className="w-full rounded-2xl shadow-2xl object-cover max-h-96"
          />
        </div>
      )}

      <div className="max-w-4xl mx-auto px-6 py-12">
        <RenderBuilderContent content={post} model="blog-post" />
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-16">
        <a
          href="/blog"
          className="text-indigo-500 hover:text-indigo-400 font-medium flex items-center gap-2 transition-colors"
        >
          ← Wróć do bloga
        </a>
      </div>
    </main>
  );
}
