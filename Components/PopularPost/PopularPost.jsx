import React, { useEffect, useState } from 'react'
import PostSlider from './PostSlider'
import { tns } from "tiny-slider/src/tiny-slider"
import 'tiny-slider/dist/tiny-slider.css'
import * as styles from './popularpost.module.scss'
import axios from 'axios'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
import 'animate.css/animate.css'
import ContentLoader from '../ContentLoader/ContentLoader'
const PopularPost = () => {
    const [loading, setLoading] = useState(false)

    const [popular, setPopular] = useState([])

    const getPopular = async () => {
        const query = { 'function': 'getPopular', 'items': 10 };
        const res = await axios.post(`${process.env.GATSBY_API_FETCH_POST}`, query)
        setPopular(res.data)
        console.log(res.data)
        setLoading(!loading)

    }

    useEffect(() => {
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
    }, [loading])

    useEffect(() => {
        getPopular()



    }, [])




    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="popular_post_slider_container">
                        {popular?popular.map((item, index) => {
                            return (
                                <PostSlider id={index} post={item} />
                            )

                        }
                        ):
                       ( <ContentLoader></ContentLoader>)
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
