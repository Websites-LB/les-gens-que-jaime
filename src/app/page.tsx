import { Bar } from "@/components/bar";
import { Gens } from "@/components/gens";
import { Hero } from "@/components/hero";
import { MenuSheet } from "@/components/menu-sheet";
import { Visit } from "@/components/visit";

export default function Home() {
  return (
    <>
      <Hero />
      <MenuSheet />
      <Bar />
      <Gens />
      <Visit />
    </>
  );
}
