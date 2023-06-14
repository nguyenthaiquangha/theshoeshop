import React from 'react'
import './ListProduct.scss'
import { useSelector } from 'react-redux'
import CardProduct from '../CardProduct/CardProduct';
function ListProduct() {
  const rs  = useSelector(state => state.ProductReducer);
  const {listProduct} = rs
  return (
    <div className='list-product'>
      {listProduct.map((product) => {
        return <CardProduct key={product.id} product={product}/>
      })}
    </div>
  )
}

export default ListProduct