import Features from "./sections/Features";
import Header from "./sections/Header";
import Hero from "./sections/Hero";

function App() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <Features />
      </main>
    </>
  );
}

export default App;
