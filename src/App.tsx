import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Supporters from "./components/Supporters";
import Gallery from "./components/Gallery";
import Donation from "./components/Donation";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import useScrollReveal from "./hooks/useScrollReveal";
export default function App() {
  useScrollReveal();
  return (
    <>
      <a className="skip-link" href="#projeto">
        Pular para o conteúdo
      </a>
      <Header />
      <main>
        <Hero />
        <About />
        <Supporters />
        <Gallery />
        <Donation />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
