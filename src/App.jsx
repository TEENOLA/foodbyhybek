import Footer from "./components/layout/Footer";
import Nav from "./components/layout/Nav";
import WhatsAppButton from "./components/layout/WhatsAppButton";
import Gallery from "./components/sections/Gallery";
import Hero from "./components/sections/Hero";
import MenuSection from "./components/sections/MenuSection";
import QuoteForm from "./components/sections/QuoteForm";
import Services from "./components/sections/Services";
import Story from "./components/sections/Story";
import Welcome from "./components/sections/Welcome";

export default function App() {
  return (
    <div className="bg-black text-[#F3EEE3] antialiased">
      <Nav />
      <main>
        <Hero />
        <Welcome />
        <Story />
        <Services />
        <MenuSection />
        <Gallery />
        <QuoteForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
