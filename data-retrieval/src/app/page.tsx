"use client";

import { sections } from "@/components/data/sections";
import { TitlesNav } from "@/components/ui/titleNav";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function HomePage() {
  return (
    <div className="relative">
      <TitlesNav sections={sections} />

      <div className="p-5">
        <Accordion type="single" collapsible>
          {sections.map((section) => (
            <AccordionItem key={section.id} value={section.id}>
              <AccordionTrigger>
                <h2 className="text-2xl font-bold">{section.title}</h2>
              </AccordionTrigger>
              <AccordionContent>
                <p className="mt-2 text-gray-900">{section.content}</p>
                <Button variant="default" size="default" className="mt-4">
                  ok!
                </Button>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
