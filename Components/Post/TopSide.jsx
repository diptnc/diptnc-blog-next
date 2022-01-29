import React, { useState } from 'react'
import * as styles from './topside.module.scss'
import { GoPrimitiveDot } from 'react-icons/go'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import Advertisement from './Advertisement';
import { useRouter } from 'next/router';
import Link from 'next/link'
const TopSide = (props) => {

    const [isOpen, setIsOpen] = useState(true)
    const router = useRouter()


    return (
        <>
            <div className={`container ${styles.top_post_container}`}>
                <div className="col-lg-12">
                    {isOpen ? (<Advertisement />) : "null"}

                    <div className={` ${styles.post_shortlink_container}`}>
                        <h1 className={styles.shortlink}>
                  
                            <Link href="/">
                            <a> Home / </a>
                        </Link><Link href={router.asPath}>
                            <a>{props.post.blog_post_title}</a></Link></h1>
                    </div>

                    {/* <div className={`${styles.blog_information}`}>
                        {props.post.blog_post_category.map((category, index) => {
                            return (<a href="javascript:" key={index} className={`${styles.category}  category_${category.value}`}><GoPrimitiveDot></GoPrimitiveDot>{category.label}</a>)
                        })}
                    </div> */}
                    {/* <hr className={styles.separator} /> */}
                </div>

            </div>

            {/* <hr /> */}
        </>
    )
}

export default TopSide
