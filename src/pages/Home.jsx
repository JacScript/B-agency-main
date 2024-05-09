import React from 'react'
import Navbar from '../components/Navbar.jsx';
import Banner from '../components/Banner.jsx';
import Solution from '../components/Solution.jsx';
import Started from '../components/Started.jsx';
import Services from '../components/Services.jsx';
import Feature from '../components/Features.jsx';
import MyFooter from '../components/MyFooter.jsx';
import HowItWorks from '../components/HowItWorks.jsx';

const Home = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Solution/>
    <HowItWorks/>
    <Started/>
    <Services/>
    <Feature/>
    <MyFooter/>
    </>
  )
}

export default Home