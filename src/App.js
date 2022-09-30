import Faq from "./components/Faq";
import Hero from "./components/Hero";
import JoinGdg from "./components/JoinGdg";
import Navbar from "./components/NavBar"
import WhatIsDevFest from "./components/WhatIsDevFest";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero/>
      <WhatIsDevFest/>
      <Faq />
      <JoinGdg/>
    </div>
  );
}

export default App;
