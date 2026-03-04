interface FeatureCardProps {
  icon?: string;
  title?: string;
  description?: string;
  accentColor?: string;
}

export function FeatureCard({
  icon = "✨",
  title = "Feature",
  description = "Opis funkcji, którą możesz edytować bezpośrednio w Builder.io.",
  accentColor = "#6366f1",
}: FeatureCardProps) {
  return (
    <div className="group relative bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100 dark:border-slate-700">
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-6"
        style={{ backgroundColor: `${accentColor}20` }}
      >
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
        {title}
      </h3>
      <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
        {description}
      </p>
      <div
        className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full rounded-b-2xl transition-all duration-500"
        style={{ backgroundColor: accentColor }}
      />
    </div>
  );
}
