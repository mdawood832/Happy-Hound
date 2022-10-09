import React from 'react'
import DogBag from '../assets/dogBag.png'

function Cart({products}) {
  return (
    <div className='productsBody'>
        <main className='productsMain'>
            <div className='productsContainer'>
                <div className='row'>
                    <div className='productSelectedTop'>
                        <h2 className='cartTitle'>Cart</h2>
                    </div>
                    
                    <div className="cart">
                        <div className="cartHeader">
                            <div className="cartProduct">Product</div>
                            <div className="cartQuantity">Quantity</div>
                            <div className='cartTotal'>Price</div>
                        </div>

                        <div className='cartBody'>
                            <div className='cartItem'>

                                <div className='cartProduct'>
                                    <img src={DogBag}
                                     alt=""
                                     className='cartProductImg'
                                    />
                                </div>

                                <div className='cartProductInfo'>
                                    <span className='cartProductTitle'>
                                        The Bag
                                    </span>

                                    <span className='cartProductPrice'>
                                        $135.00
                                    </span>
                                    <button className='cartProductRemove'> 
                                        Remove 
                                    </button>
                                </div>

                                <div className='cartQuantity'>
                                    <input type="number" min={0} max={10} className="cartInput" />
                                </div>

                                <div className="cartTotal">
                                    $135.00
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='total'>

                    </div>

                

                </div>
            </div>
        </main>
    </div>
  )
}

export default Cart