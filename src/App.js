import Faq from "./components/Faq";
import Hero from "./components/Hero";
import Navbar from "./components/NavBar"
import Schedule from "./components/Schedule";
import Footer from "./components/Footer";
import Speakers from "./components/Speakers";
import Testimonials from "./components/Testimonials";
import JoinGdg from "./components/JoinGdg";
import WhatIsDevFest from "./components/WhatIsDevFest";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <WhatIsDevFest/>
      <Speakers/>
      <Faq />
      <Schedule />
      <Testimonials/>
      <JoinGdg/>
      <Footer />
    </div>
  );
}

export default App;
