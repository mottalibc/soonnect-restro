import About from "@/components/About";
import Hero from "@/components/Hero";
import Gallary from "@/components/Gellary";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Gallary />
    </>
  );
}
