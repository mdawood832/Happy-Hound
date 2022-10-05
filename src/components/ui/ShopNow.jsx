import React from 'react'
import {Link} from 'react-router-dom'

const ShopNow = () => {
  return (
    <Link to="/products" className='shopButtonTag'>
        <button className='shopButton'>Shop Now</button>
    </Link>
  )
}

export default ShopNow