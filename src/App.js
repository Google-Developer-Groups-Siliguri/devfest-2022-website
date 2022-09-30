import Faq from "./components/Faq";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar"
import Schedule from "./components/Schedule";
import Footer from "./components/Footer";
import Speakers from "./components/Speakers";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Speakers/>
      <Faq />
      <Schedule />
      <Testimonials/>
      <Footer />
    </div>
  );
}

export default App;
