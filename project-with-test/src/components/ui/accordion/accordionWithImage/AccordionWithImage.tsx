import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../accordion";

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
            <div style={{ position: "relative", textAlign: "center" }}>
              <img src={imageUrl} alt={imageAlt} style={{ width: "100%" }} />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                }}
              >
                {imageAlt}
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionWithImage;
