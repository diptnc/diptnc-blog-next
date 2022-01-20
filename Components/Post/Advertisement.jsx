import React, { useState } from 'react'

import * as styles from './topside.module.scss'
import { AiOutlineCloseCircle } from 'react-icons/ai'

import adImage from '../../assets/wide-angle-post.jpg'
import adImage2 from '../../assets/square-angle-post.jpg'

const Advertisement = () => {

    return (
        <>
            <div className={` ${styles.top_post_advertisement_container}`}><a href="https://diptanuchakraborty.in" target="_blank"> <img src={adImage.src} alt="" /></a>

                {/* close button */}
                {/* <button className={`${styles.close_button}`}>
            <AiOutlineCloseCircle />
        </button> */}

            </div>
            <div className={` ${styles.top_post_advertisement_container2}`}><a href="https://diptanuchakraborty.in" target="_blank"> <img src={adImage2.src} alt="" /></a>
                {/* <button className={`${styles.close_button}`}>
            <AiOutlineCloseCircle />
        </button> */}
            </div>
        </>
    );
};

export default Advertisement;
