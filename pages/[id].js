import React from 'react'
import ProductDetail from './ProductDetail'
import { useRouter } from 'next/router'

const ProductDetailPage = () => {
  const router = useRouter()
  const { id } = router.query
  
  return (
    <div>
      <ProductDetail id={id} />
    </div>
  )
}

export default ProductDetailPage