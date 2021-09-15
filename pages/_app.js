import loadable from '@loadable/component'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../Layout/GlobalStyle/colors.css';
import '../Layout/GlobalStyle/_categoryColors.scss'



loadable(() => import('bootstrap/dist/js/bootstrap.bundle'))

//tiny slider
import '../Components/TrendingSlider/GlobalSliderSettings.scss'

import 'tiny-slider/dist/tiny-slider.css'
//content loader css
import '../Components/ContentLoader/contentloader.scss'

//Masory Grid
import '../Layout/GlobalStyle/masonryLayout.scss'

import Router from 'next/router';
import { useState } from 'react';
import LoaderRoute from '../Layout/LoaderRoute/LoaderRoute';


function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);
  Router.events.on('routeChangeStart', url => {
    setIsLoading(true);

  })
  Router.events.on('routeChangeComplete', url => {
    setIsLoading(false);


  })
  return (

    <>
      {isLoading ? <LoaderRoute></LoaderRoute> : <Component {...pageProps} />
      }

    </>

  )
}

export default MyApp
