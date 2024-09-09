import { Button } from "@/src/components/ui/button";
import * as React from "react";

const Page = () => {
  return (
    <div className="flex flex-col items-center space-y-4 p-10">
      <h1 className="text-2xl font-bold mb-4">Example Buttons</h1>

      {/* Default Button */}
      <Button>Default Button</Button>

      {/* Destructive Button */}
      <Button variant="destructive">Destructive Button</Button>

      {/* Outline Button */}
      <Button variant="outline">Outline Button</Button>

      {/* Secondary Button */}
      <Button variant="secondary">Secondary Button</Button>

      {/* Ghost Button */}
      <Button variant="ghost">Ghost Button</Button>

      {/* Link Button */}
      <Button variant="link">Link Button</Button>

      {/* Large Button */}
      <Button size="lg">Large Button</Button>

      {/* Small Button */}
      <Button size="sm">Small Button</Button>

      {/* Icon Button */}
      <Button size="icon">Icon Button</Button>
    </div>
  );
};

export default Page;
