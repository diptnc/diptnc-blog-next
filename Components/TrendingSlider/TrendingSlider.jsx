


import React, { useEffect, useState } from 'react'


import SliderItem from './SliderItem'
import axios from 'axios'

// import ContentLoader from '../ContentLoader/ContentLoader'



const isSSR = typeof window === 'undefined';
const { tns } = !isSSR ? require('tiny-slider/src/tiny-slider') : <div />;





const TrendingSlider = (props) => {
    const [trending, setTrending] = useState(props.trending)
    const [contentLoaded, setContentLoaded] = useState(false)




  useEffect(() => {
  if (trending.length > 0) {
      setContentLoaded(true)
  }
  } , [])

    useEffect(() => {
        if(contentLoaded===true){
        var slider = tns({
            container: '.my-slider',
            items: 1,
            nav: true,
            dots: true,
            mouseDrag: true,
            autoplay: true,
            arrowKeys: false,
            speed: 1000,
            gutter: 30,
            controls: false,
            controlsPosition: "bottom",
            navPosition: "bottom",
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',

        });
    }
    }, [contentLoaded])


    useEffect(() => {



        // getTrending();



    }, [])




    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="my-slider">

                            {props.trending && props.trending.map((item, index) => {
                                return (
                   

                                   <SliderItem  key={index} id={index} post={item} />

                            
                                )
                            })
                        }


                        </div>
                    </div>
                    <div className="pb-4">

                    </div>
                </div>
            </div>
        </>
    )
}

export default TrendingSlider
                    /* <div className="tns_slider_btn">
<button>ager</button>
<button>picher</button>
</div>
*/
