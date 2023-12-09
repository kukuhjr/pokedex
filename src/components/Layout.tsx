import { Fragment } from "react"
import { Outlet } from "react-router-dom"

import Footer from "./Footer"
import Header from "./Header"

const Layout = () => {
    return (
        <Fragment>
            <Header />

            <main className="h-screen px-3">
                <Outlet />
            </main>

            <Footer />
        </Fragment>
    )
}

export default Layout