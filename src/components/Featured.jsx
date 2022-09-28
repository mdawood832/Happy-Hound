import React from 'react'
import Features from './ui/Features'
import { Products } from '../Products.js'

const Featured = () => {
    // console.log(Products)
  return (
    <section id='features'>
        <div className='container'>
            <div className='row'>
                <h2 className='featuredSectionTitle'>
                    Featured Dog Accessories 
                </h2>

                <div className='dogAccessories'>
                  <Features Products={Products}/>
                  <Features Products={Products}/>
                  <Features Products={Products}/>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Featured
