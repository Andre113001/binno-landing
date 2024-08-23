import React from 'react'
import Hero from '../../components/HomeSections/Hero/Hero';
import About from '../../components/HomeSections/About/About';
import Team from '../../components/HomeSections/Team/Team';
import Contact from '../../components/HomeSections/Contact/Contact';

function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Hero />
      <About />
      <Team />
      <Contact />
      
    </div>
  )
}

export default Home
