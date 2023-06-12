import React, { useEffect } from 'react'
import './ProductFeature.scss'
import ListProduct from '../ListProduct/ListProduct'
import axios from 'axios'
function ProductFeature() {

  return (
    <div>
        <h2 className='product-feature-title'>Product Feature</h2>
        <ListProduct />
    </div>
  )
}

export default ProductFeature