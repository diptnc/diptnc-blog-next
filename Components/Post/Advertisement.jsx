import React, { useState } from 'react'

import * as styles from './topside.module.scss'
import { AiOutlineCloseCircle } from 'react-icons/ai'

import adImage from '../../assets/wide-angle-post.jpg'
import adImage2 from '../../assets/square-angle-post.jpg'

const Advertisement = () => {

    return (
        <>
            <div className={` ${styles.top_post_advertisement_container}`}>
                <a href="https://diptanuchakraborty.in"  rel="noopener noreferrer"  target="_blank">
                    <img src={adImage.src} alt="advertisement placeholder" />
                </a>


            </div>
            <div className={` ${styles.top_post_advertisement_container2}`}>
                <a href="https://diptanuchakraborty.in" rel="noopener noreferrer"  target="_blank">
                <img src={adImage2.src} alt="advertisement placeholder" />
                </a>
                
            </div>
        </>
    );
};

export default Advertisement;
