import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../accordion";
import Image from "next/image";

interface AccordionWithImageProps {
  title: string;
  content: string;
  imageUrl: string;
  imageAlt: string;
}

const AccordionWithImage: React.FC<AccordionWithImageProps> = ({
  title,
  content,
  imageUrl,
  imageAlt,
}) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>{title}</AccordionTrigger>
        <AccordionContent>
          <div>
            <p>{content}</p>
            <div className="relative text-center">
              <Image
                src={imageUrl}
                alt={imageAlt}
                layout="responsive"
                width={700}
                height={475}
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
                {imageAlt}
              </div>
            </div>
            <div className="mt-4"></div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionWithImage;
