import Faq from "./components/Faq";
import Hero from "./components/Hero";
import Navbar from "./components/NavBar"
import Schedule from "./components/Schedule";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Faq />
      <Schedule />
    </div>
  );
}

export default App;
