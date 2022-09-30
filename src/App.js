import Faq from "./components/Faq";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar"
import Schedule from "./components/Schedule";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Faq />
      <Schedule />
      <Footer />
    </div>
  );
}

export default App;
