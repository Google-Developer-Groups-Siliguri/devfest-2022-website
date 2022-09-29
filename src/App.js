import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/NavBar"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero/>
      <Faq />
      <Footer/>
    </div>
  );
}

export default App;
