interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
}

export function HeroSection({
  title = "Witaj w Builder.io",
  subtitle = "Twórz treści wizualnie, bez pisania kodu.",
  ctaText = "Dowiedz się więcej",
  ctaLink = "/blog",
  backgroundImage,
}: HeroSectionProps) {
  return (
    <section
      className="relative flex items-center justify-center min-h-[80vh] overflow-hidden"
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {}
      }
    >
      {!backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900" />
      )}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <a
          href={ctaLink}
          className="inline-block bg-indigo-500 hover:bg-indigo-400 text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/30"
        >
          {ctaText}
        </a>
      </div>
    </section>
  );
}
