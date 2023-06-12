import React from 'react';
import './CartTable.scss';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCart,tangItemCart,giamItemCart } from '../../../../redux/slides/Cart';
function CartTable() {
     
    const dispatch = useDispatch()
    const rs = useSelector(state => state.CartReducer);
    const { cart } = rs;

    return (
        <div className='table'>
            <table >
                <thead className='table-head'>
                    <tr>
                        <th><input type="checkbox" className='checkbox' /></th>
                        <th>id</th>
                        <th>img</th>
                        <th>name</th>
                        <th>price</th>
                        <th>quantity</th>
                        <th>total</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody className='table-body'>
                    {cart.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td><input type="checkbox" className='checkbox' /></td>
                                <td>{item.id}</td>
                                <td>
                                    <img src={item.image} alt="" style={{ width: '8.5rem', height: '5.6rem' }} />
                                </td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>
                                    <button className='btn-quantity' onClick={() => dispatch(tangItemCart(item.id))}>+</button>
                                    <input type="text" value={item.cartQuantity} style={{ background: '#D9D9D9', width: '7.9rem', height: '2.3rem', margin: '0 2.1rem', textAlign: 'center', border: 'none' }} />
                                    <button className='btn-quantity' onClick={() => dispatch(giamItemCart(item.id))}>-</button>
                                </td>
                                <td>{item.price *item.cartQuantity}</td>
                                <td>
                                    <button className='btn btn-edit'>Edit</button>
                                    <button className='btn btn-delete' onClick={() => dispatch(deleteCart(item.id))}>Delete</button>
                                </td>
                            </tr>

                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default CartTable