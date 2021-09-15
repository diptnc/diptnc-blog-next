import React, { useEffect, useState } from 'react'
import PostSlider from './PostSlider'

import * as styles from './popularpost.module.scss'
import axios from 'axios'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
import ContentLoader from '../ContentLoader/ContentLoader'

const isSSR = typeof window === 'undefined';
const { tns } = !isSSR ? require('tiny-slider/src/tiny-slider') : <div />;

const PopularPost = (props) => {
    const [contentLoaded, setContentLoaded] = useState(false)

    const [popular, setPopular] = useState(props.popular)


    useEffect(() => {
        if (popular.length > 0) {
            setContentLoaded(true)
        }
    }, [])

    useEffect(() => {
        if (contentLoaded === true) {
            var slider = tns({
                container: '.popular_post_slider_container',
                items: 1,
                slideBy: 'page',
                nav: true,
                dots: true,
                mouseDrag: true,
                arrowKeys: true,
                speed: 1000,
                gutter: 30,
                autoplay: false,
                loop: false,

                controls: true,
                controlsPosition: "bottom",
                navPosition: "bottom",
                controlsContainer: ".tns_slider_btn",
                arrowKeys: true,
                responsive: {

                    700: {
                        items: 2,
                        center: true
                    },

                }

            });
        }
    }, [contentLoaded])







    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="popular_post_slider_container">
                        {popular ? popular.map((item, index) => {
                            return (
                                <PostSlider id={index} post={item} />
                            )

                        }
                        ) :
                            (null)
                        }
                    </div>








                </div>
                <div className="">
                    <div className={`tns_slider_btn ${styles.slider_btn}`}>
                        <button><FaArrowCircleLeft></FaArrowCircleLeft></button>
                        <button><FaArrowCircleRight></FaArrowCircleRight></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PopularPost
