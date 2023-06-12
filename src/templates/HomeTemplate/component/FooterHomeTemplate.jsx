import React from 'react'
import './FooterHomeTemplate.scss'
import { NavLink } from 'react-router-dom'
function FooterHomeTemplate() {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <h2>GET HELP</h2>
                    <nav className='footer-nav'>
                        <NavLink className={'footer-item'} to={'/'}>Home</NavLink>
                        <NavLink className={'footer-item'} to={'/nike'}>Nike</NavLink>
                        <NavLink className={'footer-item'} to={'/adidas'}>Adidas</NavLink>
                        <NavLink className={'footer-item'} to={'/contatc'}>Contact</NavLink>
                    </nav>
                </div>
                <div className='footer-colom-1'></div>
                <div className="footer-top-center">
                    <h2>SUPPORT</h2>
                    <nav className='footer-nav'>
                        <NavLink className={'footer-item'} to={'/about'}>About</NavLink>
                        <NavLink className={'footer-item'} to={'/contact'}>Contact</NavLink>
                        <NavLink className={'footer-item'} to={'/help'}>Help</NavLink>
                        <NavLink className={'footer-item'} to={'/phone'}>Phone</NavLink>
                    </nav>
                </div>
                <div className='footer-colom-2'></div>
                <div className="footer-top-right">
                    <h2>REGISTER</h2>
                    <nav className='footer-nav'>
                        <NavLink className={'footer-item'} to={'/register'}>Register</NavLink>
                        <NavLink className={'footer-item'} to={'/login'}>Login</NavLink>
                    </nav>
                </div>
            </div>
            <div className="footer-bot">
                <p>© 2022 Cybersoft All Rights Reserved | Design Theme by Trương Tấn Khải.</p>
            </div>
        </div>
    )
}

export default FooterHomeTemplate