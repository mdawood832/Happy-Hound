import React from 'react'
import ShopNow from './ui/ShopNow'
import '../css/ExploreMore.css'

const ExploreMore = () => {
  return (
    <section id='ExploreMore'>
        <div className='container'>
            <div className='rowColumn'>
                <h2>Explore More</h2>
                <ShopNow/>
            </div>
        </div>
    </section>
  )
}

export default ExploreMore