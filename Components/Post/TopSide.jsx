import React, { useState } from 'react'
import * as styles from './topside.module.scss'
import { GoPrimitiveDot } from 'react-icons/go'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import Advertisement from './Advertisement';

const TopSide = (props) => {

    const [isOpen, setIsOpen] = useState(true)


    return (
        <>
            <div className={`container ${styles.top_post_container}`}>
                <div className="col-lg-12">
                    {isOpen ? (<Advertisement />) : "null"}


                    <h1 className={styles.header}>{props.post.blog_post_title}</h1>
                    <div className={`${styles.blog_information}`}>
                        {props.post.blog_post_category.map((category, index) => {
                            return (<a href="javascript:" key={index} className={`${styles.category}  category_${category.value}`}><GoPrimitiveDot></GoPrimitiveDot>{category.label}</a>)
                        })}
                    </div>
                    {/* <hr className={styles.separator} /> */}
                </div>

            </div>

            {/* <hr /> */}
        </>
    )
}

export default TopSide
