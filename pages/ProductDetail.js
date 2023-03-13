import React from 'react'
import Detail from './Detail'
import products from './products.js'


const ProductDetail = (id) => {
  return (
    <div>
      {products.map((product) => {
        if (product.id == id.id){
          return (
            <div>
              <Detail product={product} key={product.id} />
            </div>
          )
        }
      })}
    </div>
  )
}

export default ProductDetail