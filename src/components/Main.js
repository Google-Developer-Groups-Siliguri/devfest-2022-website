import React from 'react'
import Navbar from "../components/NavBar"
import Faq from "../components/Faq";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import WhatIsDevFest from "../components/WhatIsDevFest";
import Speakers from "../components/Speakers";
import Sponsors from "../components/Sponsors";
import Testimonials from "../components/Testimonials";
import JoinGdd from "../components/JoinGdg";
import CommunityPartners from './CommunityPartners';
export default function main() {
  return (
    <div>
      <Navbar active="home" />
      <Hero />
      <WhatIsDevFest />
      <Speakers/>
      {/* <Faq /> */}
      <Testimonials />
      <Sponsors />
      <CommunityPartners />
      <JoinGdd />
      <Footer />
    </div>
  )
}
