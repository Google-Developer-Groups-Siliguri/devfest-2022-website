import React from 'react'
import Navbar from "../components/NavBar"
import Faq from "../components/Faq";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
export default function main() {
  return (
    <div>
        <Navbar active="home"/>
        <Hero/>
        <Faq/>
        <Footer/>
    </div>
  )
}
