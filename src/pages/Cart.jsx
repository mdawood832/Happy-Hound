import React from 'react'

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
                                    <img src=""
                                     alt=""
                                     className='cartProductImg'
                                    />
                                </div>

                                <div className='cartProductInfo'>

                                </div>
                            </div>
                        </div>
                    </div>

                

                </div>
            </div>
        </main>
    </div>
  )
}

export default Cart