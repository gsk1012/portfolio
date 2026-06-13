import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Toolkit } from "./components/Toolkit";
import { CaseStudy } from "./components/CaseStudy";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Toolkit />
        <CaseStudy />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
