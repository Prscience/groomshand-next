import { ThemeProvider } from "@/components/ThemeProvider";
import AccentBar from "@/components/AccentBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Products from "@/components/Products";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Distributors from "@/components/Distributors";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <ThemeProvider>
      <AccentBar />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Products />
        <Features />
        <Testimonials />
        <About />
        <Distributors />
        <CtaBanner />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
