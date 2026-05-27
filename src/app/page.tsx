import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";
import Process from "@/components/sections/Process";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Location from "@/components/sections/Location";
import CTABanner from "@/components/sections/CTABanner";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <WhyUs />
      <Process />
      <Gallery />
      <Testimonials />
      <Location />
      <CTABanner />
      <Footer />
    </main>
  );
}
