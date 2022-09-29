import React from 'react'
import Nav from '../components/Nav'
import Landing from '../components/Landing'
import Featured from '../components/Featured'
import ExploreMore from '../components/ExploreMore'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Nav/>
        <Landing/>
        <Featured/>
        <ExploreMore/>
        <Footer/>
    </div>
  )
}

export default Home