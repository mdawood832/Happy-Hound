import React from 'react'
import Features from './ui/Features'

function Featured() {
  return (
    <section id='features'>
        <div className='container'>
            <div className='row'>
                <h2 className='featuredSectionTitle'>
                    Featured Dog Accessories 
                </h2>

                <div className='dogAccessories'>
                  <Features/>
                  <Features/>
                  <Features/>
                </div>




            </div>
        </div>
    </section>
  )
}

export default Featured
