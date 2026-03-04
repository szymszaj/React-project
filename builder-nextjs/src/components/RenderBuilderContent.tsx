"use client";

import {
  BuilderComponent,
  useIsPreviewing,
  builder,
  Builder,
} from "@builder.io/react";
import { HeroSection } from "./HeroSection";
import { FeatureCard } from "./FeatureCard";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

// Register custom components so they appear in Builder.io editor
Builder.registerComponent(HeroSection, {
  name: "HeroSection",
  inputs: [
    { name: "title", type: "string", defaultValue: "Witaj w Builder.io" },
    {
      name: "subtitle",
      type: "string",
      defaultValue: "Twórz treści wizualnie, bez pisania kodu.",
    },
    { name: "ctaText", type: "string", defaultValue: "Dowiedz się więcej" },
    { name: "ctaLink", type: "string", defaultValue: "/blog" },
    {
      name: "backgroundImage",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png", "webp"],
    },
  ],
});

Builder.registerComponent(FeatureCard, {
  name: "FeatureCard",
  inputs: [
    { name: "icon", type: "string", defaultValue: "✨" },
    { name: "title", type: "string", defaultValue: "Feature" },
    { name: "description", type: "string", defaultValue: "Opis funkcji." },
    { name: "accentColor", type: "color", defaultValue: "#6366f1" },
  ],
});

interface RenderBuilderContentProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any;
  model: string;
}

export function RenderBuilderContent({
  content,
  model,
}: RenderBuilderContentProps) {
  const isPreviewing = useIsPreviewing();

  if (!content && !isPreviewing) return null;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <BuilderComponent content={content as any} model={model} />;
}
