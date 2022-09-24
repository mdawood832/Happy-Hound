import React from 'react'
import LandingPagePhoto from '../assets/landingPagePhoto.png'
import Featured from './Featured'

function Landing() {
  return (
    <section id='landing'>
        <header>
            <div className="headerContainer">
                <div className="headerDescription">
                    <img className='landingPagePhoto' src={LandingPagePhoto} alt="" />
                </div>
                <div className='headerCaption'>
                        <h1 className='shopCaption'>America's Leading Brand for Dogs</h1>
                        <a href="/" className='shopButtonTag'>
                            <button className='shopButton'>Shop Now</button>
                        </a>
                    </div>
            </div>
        </header>
    </section>
  )
}

export default Landing
