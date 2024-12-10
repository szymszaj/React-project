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
      defaultValue: "default",
      helperText: "Select the button variant",
    },
    {
      name: "size",
      type: "enum",
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
