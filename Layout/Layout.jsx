import React, { useEffect } from 'react'
import Script from 'next/script'
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
            {/* Global site tag (gtag.js) - Google Analytics */}
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-E3GJFR7EJ2"
                strategy="afterInteractive"
            />

<Script id="google-analytics" strategy="afterInteractive">
        {`
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
       
         gtag('config', 'G-E3GJFR7EJ2');
        `}
      </Script>


            <Header></Header>
            <div className="header_spacer_top" style={{ paddingTop: '105px' }}></div>
            {props.children}
            <Footer></Footer>
        </>
    )
}

export default Layout
