import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hello from "./components/Banner.jsx"
import OurServices from './components/OurServices.jsx'
import PricingSection from './components/Pricing.jsx'
import FAQS from './components/FAQS.jsx'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import ContactForm from './components/ContactUs.jsx'
import Mission from './components/Mission.jsx'

createRoot(document.getElementById('root')).render(
  <>
    
    <Navbar/>
    <Hello/>

    
    <OurServices/>
    <PricingSection/>
    <FAQS/>
    <ContactForm/>
    <Mission/>
    <Footer/>
    
   
    </>
 
)
