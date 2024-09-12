"use client";
import { builder, Builder } from "@builder.io/react";
import { Button } from "./button";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Button, {
  name: "button",
  inputs: [
    {
      name: "variant",
      type: "enum",
      enum: ["default", "destructive", "outline", "secondary", "ghost", "link"],
      defaultValue: "default",
      helperText: "Select the button variant",
    },
    {
      name: "size",
      type: "enum",
      enum: ["default", "sm", "lg", "icon"],
      defaultValue: "default",
      helperText: "Select the button size",
    },
    {
      name: "children",
      type: "text",
      defaultValue: "Click Me",
      helperText: "Text inside the button",
    },
  ],
});
