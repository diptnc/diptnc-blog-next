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

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
