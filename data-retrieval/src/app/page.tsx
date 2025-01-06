import { sections } from "@/components/data/sections";
import { TitlesNav } from "@/components/ui/titleNav";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="relative">
      <TitlesNav sections={sections} />

      <div className="p-5">
        {sections.map((section) => (
          <div key={section.id} id={section.id} className="my-10">
            <h2 className="text-2xl font-bold">{section.title}</h2>
            <p className="mt-2 text-gray-900">{section.content}</p>
            <Button variant="default" size="default" className="mt-4">
              ok!
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
