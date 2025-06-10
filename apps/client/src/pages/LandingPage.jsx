import { useEffect } from 'react'
import Header from '../components/Header.jsx';
import Hero from '../components/Hero.jsx';
import Services from '../components/Services.jsx';
import About from '../components/About.jsx';
import Footer from '../components/Footer.jsx';


const LandingPage = () => {

  useEffect(() => {
    localStorage.removeItem('token');
  }, []);

  return (
    <>
        <Header/>
        <Hero/>
        <Services/>
        <About/>
        <Footer/>
    </>
  )
}

export default LandingPage
