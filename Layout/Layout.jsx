import React, { useEffect } from 'react'

import Header from './Header/Header';
import Footer from './Footer/Footer';
const Layout = (props) => {

    useEffect(() => {

        //check if browser in in dark mode
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
        const root = document.documentElement;
        if (prefersDarkMode.matches) {
    
            root.setAttribute('data-theme', 'light');

        } else {
         

            root.setAttribute('data-theme', 'light');
        }

    }, [])
    return (
        <>
            <Header></Header>
            <div className="header_spacer_top" style={{ paddingTop: '105px' }}></div>
            {props.children}
            <Footer></Footer>
        </>
    )
}

export default Layout
