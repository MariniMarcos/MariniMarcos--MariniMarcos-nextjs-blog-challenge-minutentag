import React from 'react'
import Item from './Item'
import products from './products.js'
import Styles from './ProductListing.module.css'


const ProductListing = () => {
  return (
    <section className={Styles.list} >
      {products.map((product) => {
        return (
          <div>
            <Item product={product} key={product.id} />
          </div>
        )
      })}
    </section>
  )
}

export default ProductListing