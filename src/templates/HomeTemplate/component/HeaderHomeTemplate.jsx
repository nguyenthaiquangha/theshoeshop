import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import SearchIcon from 'src/assets/img/search.svg';
import CartIcon from 'src/assets/img/cart.svg';
import { LogoIcon } from 'src/assets/icon';
import './HeaderHomeTemplate.scss'
import { getCartToTalQuantity } from 'src/redux/slices/Cart';
import { useDispatch, useSelector } from 'react-redux';

function HeaderHomeTemplate() {

    const dispatch = useDispatch();
    const { cart, totalQuantity } = useSelector(state => state.CartReducer);
    const { ListCategory } = useSelector(state => state.ProductReducer);
    useEffect(() => {
        dispatch(getCartToTalQuantity());
    }, [cart])

    return (
        <div>
            <header className='header-home-template'>
                <LogoIcon />
                <div className="header-nav-right">
                    <div className='header-search'>
                        <img src={SearchIcon} alt="" />
                        {/* <p className='header-text-search'>Search</p> */}
                        <NavLink to={'/search'} className={'header-text-search'} style={{textDecoration: 'none'}}>Search</NavLink>
                    </div>
                    <NavLink to={'/carts'} className={'header-link'}>
                        <div className='card-icon'>
                            <img src={CartIcon} alt="" />
                            <p>({totalQuantity})</p>
                        </div>
                    </NavLink>
                  
                    <li>
                        <NavLink to={'/login'} className={'header-link'}>Login</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/register'} className={'header-link'}>Register</NavLink>
                    </li>
                </div>

               
            </header>

            <nav className='header-menu'>

                <NavLink className={'menu-item'} to={'/'}>Home</NavLink>
                {ListCategory.map((item) => {
                    return <NavLink className={'menu-item'} to={'/'} key={item.id}>{item.category}</NavLink>
                })}
    
            </nav>
        </div>
    )
}

export default HeaderHomeTemplate