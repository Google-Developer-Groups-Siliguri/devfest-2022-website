import React from 'react'
import Navbar from "../components/NavBar"
import Faq from "../components/Faq";
import Hero from "../components/Hero";
import Footer2 from "../components/Footer2";
import WhatIsDevFest from "../components/WhatIsDevFest";
import Speakers from "../components/Speakers";
import Sponsors from "../components/Sponsors";
import Testimonials from "../components/Testimonials";
import JoinGdd from "../components/JoinGdg";
import CommunityPartners from './CommunityPartners';
import Contact_Map from './Contact-Map';
export default function main() {
  return (
    <div>
      <Navbar active="home" />
      <Hero />
      <WhatIsDevFest />
      <Speakers/>
      <Sponsors />
      <CommunityPartners />
      <Testimonials />
      <Faq />
      <JoinGdd />
      <Contact_Map/>
      <Footer2 />
    </div>
  )
}