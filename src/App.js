import Faq from "./components/Faq";
import Hero from "./components/Hero";
import Navbar from "./components/NavBar"
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero/>
      <Testimonials/>
      <Faq />
    </div>
  );
}

export default App;
