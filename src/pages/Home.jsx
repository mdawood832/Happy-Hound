import React from 'react'
import Landing from '../components/Landing'
import Featured from '../components/Featured'
import ExploreMore from '../components/ExploreMore'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Landing/>
        <Featured/>
        <ExploreMore/>
    </div>
  )
}

export default Home