import React from 'react'
import './ListProduct.scss'
import { useSelector } from 'react-redux'
import CardProduct from '../CardProduct/CardProduct';
function ListProduct() {
  const rs  = useSelector(state => state.ProductReducer);
  const {ListProduct} = rs
  return (
    <div className='list-product'>
      {ListProduct.map((product) => {
        return <CardProduct key={product.id} product={product}/>
      })}
    </div>
  )
}

export default ListProduct