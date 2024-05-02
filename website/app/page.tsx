import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  justify-between ">
      <Navbar />
    </main>
  );
}
