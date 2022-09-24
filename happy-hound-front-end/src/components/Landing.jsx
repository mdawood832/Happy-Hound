import React from 'react'
import LandingPagePhoto from '../assets/landingPagePhoto.png'

function Landing() {
  return (
    <section id='landing'>
        <header>
            <div className="headerContainer">
                <div className="header__description">
                    <img className='landingPagePhoto' src={LandingPagePhoto} alt="" />
                    <h1>America's Leading Brand for Dog Accessories</h1>
                    <button>Shop Now</button>
                </div>
            </div>
        </header>
    </section>
  )
}

export default Landing
