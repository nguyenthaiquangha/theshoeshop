import React from 'react'
import './Cart.scss'
import CartTable from './component/CartTable/CartTable'
function Carts() {
  return (
    <div className='cart'>
      <div className='cart-line'></div>
      <h2>Carts</h2>
      <CartTable />
    </div>
  )
}

export default Carts