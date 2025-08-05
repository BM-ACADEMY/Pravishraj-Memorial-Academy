import React from 'react'
import Header from './Pages/Layout/Header'
import Home from './Pages/Home'
import AdmissionSection from './Pages/Owerspage'
import AboutSection from './Pages/Aboutsection'
import MissionVision from './Pages/Ourmissionvision'
import SocialSidebar from './Pages/Floatingicon'
import Testimonial21 from './Pages/Testimonial'
import Footer from './Pages/Layout/Footer'


const App = () => {
  return (
    <div>
        <Header/>
        <Home/>

        <div className="relative z-10 -mt-20">
        <AdmissionSection />
      </div>
      <MissionVision/>

      <AboutSection/>
      <SocialSidebar/>
      <Testimonial21/>
      <Footer/>
    </div>
  )
}

export default App
