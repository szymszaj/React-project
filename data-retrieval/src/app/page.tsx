import { TitlesNav } from "@/app/components/ui/titleNav";
import { sections } from "@/app/components/data/sections";

export default function HomePage() {
  return (
    <div className="relative">
      <TitlesNav sections={sections} />

      <div className="p-5">
        {sections.map((section) => (
          <div key={section.id} id={section.id} className="my-10">
            <h2 className="text-2xl font-bold">{section.title}</h2>
            <p className="mt-2 text-gray-600">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
