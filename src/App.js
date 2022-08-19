import React from 'react'
import About from './components/About/about'
import Contact from './components/Contact/contact'
import MyExperince from './components/Experince/Experineces'
import CopyRight from './components/footer/copyright'
import Footer from './components/footer/footer'
import Header from './components/header/Header'
import Intro from './components/Introtext/Intro'
import Portfolio from './components/potfolio/Portfolio'
import MyQute from './components/Qoute/Qoute'
import Skill from './components/skill/skill'
import Slider from './components/slider/Slider'

const App = () => {
  return (
    <>
    <Header/>
    <Slider/>
    <Intro/>
    <About/>
    <MyQute/>
    <Skill/>
    <MyExperince/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    <CopyRight/>
    </>
      
  
  )
}

export default App