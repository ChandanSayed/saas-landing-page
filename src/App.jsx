import FAQ from "./sections/FAQ";
import Features from "./sections/Features";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Pricing from "./sections/Pricing";
import Testimonials from "./sections/Testimonials";

function App() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <Features />
        <Pricing />
        <FAQ />
        <Testimonials />
      </main>
    </>
  );
}

export default App;
