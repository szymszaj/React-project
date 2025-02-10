"use client";

import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/chart/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion/accordion";
import { BarChartComponent } from "@/components/ui/chart/barChart";
import { ThemeProvider } from "next-themes";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-900 text-white">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      ></ThemeProvider>
      <nav className="w-full bg-gray-800 p-4">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="/">Home</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/about">About</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/contact">Contact</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>

      <section className="w-full max-w-4xl p-6">
        <h1 className="text-2xl font-bold mb-4">Mój Wykres</h1>
        <BarChartComponent />
      </section>

      <section className="w-full max-w-4xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Card 1</CardTitle>
          </CardHeader>
          <CardContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Card 2</CardTitle>
          </CardHeader>
          <CardContent>
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </CardContent>
        </Card>
      </section>

      <section className="w-full max-w-4xl p-6">
        <h2 className="text-2xl font-bold mb-4">FAQ</h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>What is this?</AccordionTrigger>
            <AccordionContent>
              This is an example accordion section.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How does it work?</AccordionTrigger>
            <AccordionContent>
              You click the header and it expands!
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}
