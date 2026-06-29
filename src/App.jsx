
import { useState } from 'react'
import './App.css'
import AchievementsSection from './components/AchievementsSection'
import Banner from './components/Banner'
import NavBar from './components/NavBar'
import PremiumDigitalToolsSection from './components/PremiumDigitalToolsSection'
import GetStartedPortion from './components/GetStartedPortion'
import PricingSection from './components/PricingSection'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify'

function App() {

  const [selectedTools , setSelectedTools]=useState([]);

  return (
    <>
    <NavBar selectedTools={selectedTools}></NavBar>
    <Banner></Banner>
    <AchievementsSection></AchievementsSection>
    <PremiumDigitalToolsSection selectedTools={selectedTools} setSelectedTools={setSelectedTools} ></PremiumDigitalToolsSection>
    <GetStartedPortion ></GetStartedPortion>
    <PricingSection></PricingSection>
    <Footer></Footer>
    <ToastContainer />
    </>
  )
}
export default App
