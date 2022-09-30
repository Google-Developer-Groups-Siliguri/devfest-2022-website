import Faq from "./components/Faq";
import Hero from "./components/Hero";
import Navbar from "./components/NavBar"
import Schedule from "./components/Schedule";
import Footer from "./components/Footer";
import Speakers from "./components/Speakers";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Speakers/>
      <Faq />
      <Schedule />
      <Footer/>
    </div>
  );
}

export default App;
