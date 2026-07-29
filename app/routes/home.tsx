import ImpactSection from "~/components/homepage/impact-section";
import type { Route } from "./+types/home";
import HeroSection from "~/components/homepage/hero-section";
import MissionSection from "~/components/homepage/mission-section";
import ProgramsSection from "~/components/homepage/programs-section";
import FeaturedSection from "~/components/homepage/featured-section";
import GallerySection from "~/components/homepage/gallery-section";
import ReviewsSection from "~/components/homepage/reviews-section";
import BlogSection from "~/components/homepage/blog-section";
import PartnersSection from "~/components/homepage/partners-section";
import MailingListSection from "~/components/homepage/mailinglist-section";

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
        {/* Impact Statistics */}
        <ImpactSection />
        {/* Mission section */}
        <MissionSection />
        {/* Programs section */}
        <ProgramsSection />
        {/* Featured Campaign section */}
        <FeaturedSection />
        {/* Gallery Preview Section */}
        <GallerySection />
        {/* Reviews Sction */}
        <ReviewsSection />
        {/* Blog Preview Section */}
        <BlogSection />
        {/* Partners */}
        <PartnersSection />
        {/* Mailing List Subscription Form */}
        <MailingListSection />
      </main>
    </>
  );
}
