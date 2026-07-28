import type { Route } from "./+types/home";
import HeroSection from "~/components/homepage/hero-section";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home | DeeCares Foundation" },
    { name: "description", content: "Welcome to DeeCares Foundation. A non profit dedicated to providing essential care for the elderly" },
  ];
}

export default function Home() {
  return (
    <>
      <main className="pt-20">
        {/* Hero Section */}
        <HeroSection />
      </main>
    </>
  );
}
