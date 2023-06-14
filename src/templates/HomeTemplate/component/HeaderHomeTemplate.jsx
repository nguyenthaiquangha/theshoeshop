import React, { useState, useEffect } from 'react'
import { NavLink, Navigate, useNavigate } from 'react-router-dom'

import SearchIcon from 'src/assets/img/search.svg';
import CartIcon from 'src/assets/img/cart.svg';
import { LogoIcon } from 'src/assets/icon';
import './HeaderHomeTemplate.scss'
import { getCartToTalQuantity } from 'src/redux/slices/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileThunk } from 'src/redux/slices/User';
import { resetUserProfile } from 'src/redux/slices/User';

function HeaderHomeTemplate() {

    const dispatch = useDispatch();
    const { cart, totalQuantity } = useSelector(state => state.CartReducer);
    const { ListCategory } = useSelector(state => state.ProductReducer);
    useEffect(() => {
        dispatch(getCartToTalQuantity());
    }, [cart])
    const { userProfile } = useSelector(state => state.UserReducer);
    useEffect(() => {
        const actionThunk = getProfileThunk();
        dispatch(actionThunk);
    }, []);
    const isLoggedIn = (userProfile.email !== undefined);

    const loggedInUserEmail = userProfile?.email;

    const navigateTo = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        dispatch(resetUserProfile());
        navigateTo('/');

    };
    console.log(userProfile)

    return (
        <div>
            <header className='header-home-template'>
                <NavLink to='/'>
                    <LogoIcon />
                </NavLink>

                <div className="header-nav-right">
                    <div className='header-search'>
                        <img src={SearchIcon} alt="" />
                        {/* <p className='header-text-search'>Search</p> */}
                        <NavLink to={'/search'} className={'header-text-search'} style={{ textDecoration: 'none' }}>Search</NavLink>
                    </div>
                    <NavLink to={'/carts'} className={'header-link'}>
                        <div className='card-icon'>
                            <img src={CartIcon} alt="" />
                            <p>({totalQuantity})</p>
                        </div>
                    </NavLink>

                    {isLoggedIn ? (

                        <li>
                            <NavLink to={'/profile'} className={'header-link'}>
                                Welcome, {loggedInUserEmail}
                            </NavLink>
                            <button type='submit' onClick={handleLogout}>
                                Logout
                            </button>
                        </li>
                    ) : (
                        <>
                            <li>
                                <NavLink to={'/login'} className={'header-link'}>Login</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/register'} className={'header-link'}>Register</NavLink>
                            </li>
                        </>
                    )}

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