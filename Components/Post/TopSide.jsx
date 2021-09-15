import React from 'react'
import * as styles from './topside.module.scss'
import {GoPrimitiveDot} from 'react-icons/go'

const TopSide = (props) => {
    return (
        <>
            <div className="container">
                <div className="col-lg-12">


                    <h1 className={styles.header}>{props.post.blog_post_title}</h1>
                    <div className={`${styles.blog_information}`}>
                        {props.post.blog_post_category.map((category,index) => {
                            return (<a href="javascript:" key={index} className={`${styles.category}  category_${category.value}`}><GoPrimitiveDot></GoPrimitiveDot>{category.label}</a>)
                        })}
                    </div>
                    {/* <hr className={styles.separator} /> */}
                </div>


            </div>

            <h1></h1>
        </>
    )
}

export default TopSide
