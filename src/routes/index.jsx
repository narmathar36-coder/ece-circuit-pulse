import { createFileRoute } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Announcements from "../components/Announcements";
import Events from "../components/Events";
import FeaturedProjects from "../components/FeaturedProjects";
import Highlights from "../components/Highlights";
import About from "../components/About";
import Faculty from "../components/Faculty";
import Labs from "../components/Labs";
import Projects from "../components/Projects";
import LearningHub from "../components/LearningHub";
import Placements from "../components/Placements";
import Achievements from "../components/Achievements";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

const title = "ECE Department Digital Hub | Electronics & Communication Engineering";
const description =
  "Explore the Electronics & Communication Engineering department: faculty, laboratories, student projects, learning resources, events, placements and achievements.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Announcements />
        <Events />
        <FeaturedProjects />
        <Highlights />
        <About />
        <Faculty />
        <Labs />
        <Projects />
        <LearningHub />
        <Placements />
        <Achievements />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
