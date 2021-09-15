import React, { useState, useEffect } from 'react'
import styles from './TrendingSlider.module.scss'

import $ from 'jquery'

import Link  from 'next/link'

import {GoPrimitiveDot} from 'react-icons/go'



const SliderItem = (props) => {
    // formatting the date

    const [formatedDate, setFormatedDate] = useState({
        day: '',
        month: 'month',
        year: ''
    })

    const [postExcerpt, setPostExcerpt] = useState('')

    const postLink = `/${props.post.blog_post_title_slug}`

    useEffect(() => {

        let rawDate = props.post.blog_post_date //in y-m-d
        let date = new Date(rawDate)
        let day = date.getDate()

        //get month name
        let monthName = date.toLocaleString('default', { month: 'long' })
        let year = date.getFullYear()
        setFormatedDate({ day: day, month: monthName, year: year })


        //make excerpt content shorter and clean it up

        
        let excerpt = props.post.blog_post_content;
        excerpt=new DOMParser().parseFromString(excerpt, 'text/html');
        excerpt=excerpt.body.textContent;
        let shortExcerpt = excerpt.substring(0, 300) + '...'
        setPostExcerpt(shortExcerpt)


        
        //check for if image loaded
        var myImage = new Image();
        myImage.src = `${props.post.blog_post_image_file_url}`;
        myImage.alt = `${props.post.blog_post_title}`;
        $(myImage).on('load', function () {
            $(`.trending_slider_image_${props.id}`).replaceWith(myImage);
        });


    }, [])


    return (
        <>

            <div >

                <div className={styles.slider_item} id="posts-slide" >

                    <div className="row d-lg-flex">
                        <div className="col-lg-6 align-self-center">


                            <div className={`me-lg-2 thumbnail mb-lg-0 text-center align-self-center ${styles.post_thumbnail}`}>
                                <Link href={postLink}>
                                    <a >

                                    
                                    <img className={`trending_slider_image_${props.id}`} src={`${props.post.blog_post_image_file_url}?tr=h-25,bl-5`} alt="Image" />
</a>

                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className={`${styles.content} align-self-center`}>
                                <div className={`post-meta mb-3 ${styles.post_description}`}>


                                    {props.post.blog_post_category.map((category,index) => {
                                        return (<a key={index} href="javascript:" className={`${styles.category}  category_${category.value}`}><GoPrimitiveDot></GoPrimitiveDot>{category.label}</a>)
                                    })}



                                    <span className={`${styles.date}`}>{`— ${formatedDate.month} ${formatedDate.day}, ${formatedDate.year}`}</span>
                                </div>
                                <h2 className={`${styles.post_heading}`}><Link href={postLink}>{props.post.blog_post_title}</Link>
                                </h2>
                                <p className={`${styles.post_text}`}>{postExcerpt}</p>

                                <Link href={postLink} className={` d-flex align-items-center ${styles.author_container}`}>
                               <a className={` d-flex align-items-center ${styles.author_container}`}>
                                    <div className={`${styles.author_pic}`}>

                                        <img src={`${props.post.blog_post_author_image_url}`} alt="author image" />
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

                </div>

            </div>

        </>
    )
}

export default SliderItem
