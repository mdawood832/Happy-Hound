import React from 'react'
import '../css/Products.css'
// IMPORT PRODUCTS FROM DATABASE 

const Products = () => {
  return (
    <div id="productsBody">
        <main id= "productsMain">
            <section>
                <div className="productsContainer">
                    <div className="row">
                        <div className="productsHeader">
                            <h2 className="sectionTitle">Dog Accessories</h2>
                            <select id="filter" defaultValue='default'>
                                <option value="default" >Sort</option>
                                <option value="lowToHigh">Price, Low to High</option>
                                <option value="highToLow">Price, High to Low</option>
                            </select>
                        </div>
                        <div className='products'>
                            {/* {products.map((products)=> ( */}
                                {/* // <Features products = {products} key = {products.id} /> */}
                                {/* // YOU NEED TO MAKE SURE THIS IS CORRECT AND MATCHES WITH EVERYTHING */}
                             {/* ))} */}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
  )
}

export default Products