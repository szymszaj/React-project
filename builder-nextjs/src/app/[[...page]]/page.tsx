import { fetchOneEntry, isPreviewing } from "@builder.io/sdk-react";
import { RenderBuilderContent } from "@/components/RenderBuilderContent";

interface PageProps {
  params: Promise<{ page?: string[] }>;
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const urlPath = "/" + (resolvedParams?.page?.join("/") ?? "");

  const content = await fetchOneEntry({
    model: "page",
    apiKey: process.env.NEXT_PUBLIC_BUILDER_API_KEY!,
    userAttributes: { urlPath },
  });

  if (!content && !isPreviewing()) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            404
          </h1>
          <p className="text-slate-500 mb-6">Strona nie została znaleziona.</p>
          <a href="/" className="text-indigo-500 hover:underline">
            Wróć na stronę główną
          </a>
        </div>
      </main>
    );
  }

  return <RenderBuilderContent content={content} model="page" />;
}
