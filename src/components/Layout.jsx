import React from 'react'
import Header from './Header/Header'
import Stats from './Stats/Stats'

import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default Layout
