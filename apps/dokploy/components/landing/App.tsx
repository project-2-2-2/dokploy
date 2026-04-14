import React from 'react'
import Hero from './Hero'
import Dashboard from './Dashboard'
import { Navbar } from './Navbar'
import BentoGrid from './BentoGrid'
import Footer from './Footer'

const App = () => {
  return (
    <div className='bg-[#0f1015] font-[f2] w-full min-h-screen overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <Dashboard/>
      <BentoGrid/>
      <Footer/>
     
    </div>
  )
}

export default App