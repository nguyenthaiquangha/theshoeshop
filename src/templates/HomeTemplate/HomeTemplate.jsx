import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'

function HomeTemplate() {
    return (
        <div>
            <Fragment>
                <header style={{ height: 80, background: 'blue', padding: 50, color: 'white' }}>Header</header>
                <div style={{minHeight: '75vh'}}>
                    <Outlet></Outlet>
                </div>
                <footer style={{ height: 80, background: 'black', padding: 50, color: 'white' }}>Header</footer>
            </Fragment>
        </div>
    )
}

export default HomeTemplate