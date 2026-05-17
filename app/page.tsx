import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Updates from "@/components/Updates";
import FocusAreas from "@/components/FocusAreas";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Updates />
        <FocusAreas />
      </main>
      <Footer />
    </>
  );
}
