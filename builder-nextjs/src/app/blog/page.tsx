import { fetchEntries, type BuilderContent } from "@builder.io/sdk-react";
import Link from "next/link";

export const revalidate = 60;

interface BlogPost {
  id: string;
  data: {
    title?: string;
    slug?: string;
    description?: string;
    publishDate?: string;
    coverImage?: string;
    author?: string;
  };
}

export default async function BlogPage() {
  const posts = await fetchEntries({
    model: "blog-post",
    apiKey: process.env.NEXT_PUBLIC_BUILDER_API_KEY!,
    options: {
      limit: 20,
      fields:
        "data.title,data.slug,data.description,data.publishDate,data.coverImage,data.author",
    },
  });

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Blog
          </h1>
          <p className="text-slate-300 text-xl">
            Posty zarządzane przez{" "}
            <span className="text-indigo-400 font-semibold">Builder.io</span>
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        {!posts || posts.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-6">📝</div>
            <h2 className="text-2xl font-bold text-slate-700 dark:text-slate-300 mb-3">
              Brak postów
            </h2>
            <p className="text-slate-500 mb-8 max-w-md mx-auto">
              Utwórz model <strong>blog-post</strong> w Builder.io i dodaj
              pierwszy wpis.
            </p>
            <a
              href="https://builder.io/content"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-indigo-500 hover:bg-indigo-400 text-white font-semibold px-8 py-3 rounded-full transition-all hover:scale-105"
            >
              Otwórz Builder.io →
            </a>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post: BlogPost) => (
              <Link
                key={post.id}
                href={`/blog/${post.data?.slug ?? post.id}`}
                className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100 dark:border-slate-700"
              >
                {post.data?.coverImage && (
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.data.coverImage}
                      alt={post.data.title ?? "Post"}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                {!post.data?.coverImage && (
                  <div className="aspect-video bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                    <span className="text-4xl">📄</span>
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                    {post.data?.author && (
                      <span className="font-medium">{post.data.author}</span>
                    )}
                    {post.data?.publishDate && (
                      <>
                        {post.data?.author && <span>·</span>}
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
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {post.data?.title ?? "Bez tytułu"}
                  </h2>
                  {post.data?.description && (
                    <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2">
                      {post.data.description}
                    </p>
                  )}
                  <div className="mt-4 text-indigo-500 text-sm font-semibold flex items-center gap-1">
                    Czytaj dalej{" "}
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
