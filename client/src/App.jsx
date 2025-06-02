import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Courses from './components/Courses'
import Campuses from './components/Campuses'
import Facilities from './components/Facilities'
import Testimonial from './components/Testimonial'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <div>
        <Navbar/>
        <Hero/>
        <Courses/>
        <Campuses/>
        <Facilities/>
        <Testimonial/>
        <CallToAction/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
