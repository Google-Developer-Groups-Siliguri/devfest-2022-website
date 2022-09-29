import Faq from "./components/Faq";
import Hero from "./components/Hero";
import Navbar from "./components/NavBar"
import Speakers from "./components/Speakers";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero/>
      <Speakers/>
      <Faq />
    </div>
  );
}

export default App;
