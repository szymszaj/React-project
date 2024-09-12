"use client";

import React, { useState } from "react";
import {
  Drawer,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
} from "@/src/components/ui/drawer";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <Drawer
        shouldScaleBackground={true}
        open={isOpen}
        onOpenChange={setIsOpen}
      >
        <DrawerTrigger asChild>
          <button
            onClick={() => setIsOpen(true)}
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Open Drawer
          </button>
        </DrawerTrigger>

        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Drawer Title</DrawerTitle>
            <DrawerDescription>
              This is the drawer description. Add more content as needed.
            </DrawerDescription>
          </DrawerHeader>

          <div className="p-4">
            <p>Here you can place any content inside the drawer.</p>
          </div>

          <DrawerFooter>
            <DrawerClose asChild>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-red-500 text-white rounded-md"
              >
                Close Drawer
              </button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
