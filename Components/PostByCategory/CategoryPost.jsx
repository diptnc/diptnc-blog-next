import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { GoPrimitiveDot } from 'react-icons/go'

import $ from 'jquery'
import * as styles from './categorypost.module.scss'
const CategoryPost = (props) => {
    const [formatedDate, setFormatedDate] = useState({
        day: '',
        month: 'month',
        year: ''
    })
    const postLink = `/${props.post.blog_post_title_slug}`
    useEffect(() => {


        let rawDate = props.post.blog_post_date //in y-m-d
        let date = new Date(rawDate)
        let day = date.getDate()

        //get month name
        let monthName = date.toLocaleString('default', { month: 'long' })
        let year = date.getFullYear()
        setFormatedDate({ day: day, month: monthName, year: year })






        var myImage = new Image();
        myImage.src = `${props.post.blog_post_image_file_url}`;
        myImage.alt = props.post.blog_post_title;

        $(myImage).on('load', function () {
            // $(`.category_post_image_${props.id}`).replaceWith(myImage);
            //execute with delay
            setTimeout(function () {

                $(`.${props.name}_post_image_${props.id}`).css("background-image", "url(" + myImage.src + ")");

            }, 2000);
        });
    }, [])
    return (
        <>
            <div className="col-lg-12">
                <div className={`${styles.post_entry} d-md-flex xsmall-horizontal mb-3 d-flex`} >

                    {/* <div className={`${styles.thumbnail} ${props.name}_post_image_${props.id}  mb-md-0`} style={{ backgroundImage: `url(${props.post.blog_post_image_file_url}?tr=h-40,bl-10)` }}>
                      <div className={styles.inner}></div>
                    </div> */}
                    <div className={`${styles.content} align-self-center`}>
                        <div className={`post-meta mb-2 ${styles.post_description}`}>
                            {props.post.blog_post_category.map((category) => {
                                return (<a href="javascript:" className={`${styles.category}  category_${category.value}`}><GoPrimitiveDot></GoPrimitiveDot> {category.label}</a>)
                            })}

                            <br></br>
                            <span className={`${styles.date}`}>{`— ${formatedDate.month} ${formatedDate.day}, ${formatedDate.year}`}</span>
                        </div>
                        <h2 className={`${styles.post_heading}`}><Link href={postLink}>{props.post.blog_post_title}</Link>
                        </h2>

                        <Link href={postLink} >
                            <a className={` d-flex align-items-center ${styles.author_container}`} >
                                <div className={`${styles.author_pic}`}>
                                    {props.post.blog_post_author_image_url ? <img src={`${props.post.blog_post_author_image_url}`} alt="Image" /> :
                                        <img src="https://diptanuchakraborty.in/static/media/diptanuchakraborty.9f6010f3.webp" alt="Image" />
                                    }
                                </div>


                                <div className={`${styles.author_text}`}>
                                    <h3>{props.post.blog_post_author_name}</h3>
                                    <h4>{props.post.blog_post_author_designation}</h4>
                                </div>
                            </a>

                        </Link>
                    </div>
                </div>

            </div>
        </>
    )
}

export default CategoryPost
