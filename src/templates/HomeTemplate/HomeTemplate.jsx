import React, { Fragment, Suspense } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import HeaderHomeTemplate from './component/HeaderHomeTemplate'
import FooterHomeTemplate from './component/FooterHomeTemplate'

function HomeTemplate() {
    return (
        <div>
            <Fragment>
               <HeaderHomeTemplate />
                <div style={{ minHeight: '75vh' }}>
                    <Suspense fallback={<>Loading...</>}>
                        <Outlet />
                    </Suspense>
                </div>
                <FooterHomeTemplate />
            </Fragment>
        </div>
    )
}

export default HomeTemplate