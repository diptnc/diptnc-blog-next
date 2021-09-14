import React, { useState, useEffect } from 'react'
import $ from 'jquery'

import * as styles from './SmallCards.module.scss'
import {Link} from 'gatsby'
import {GoPrimitiveDot} from 'react-icons/go'

const SmallCards = (props) => {

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




    }, [])

    useEffect(() => {







        var myImage = new Image();
        myImage.src = `${props.post.blog_post_image_file_url}`;
        myImage.alt = `${props.post.blog_post_title}`;
        $(myImage).on('load', function () {
            $(`.small_card_image_${props.id}`).replaceWith(myImage);
        });
    }, [])





    return (
        <>
            <div className=" ">
                <div className={`${styles.post_entry} d-block small-post-entry-v`}>
                    <div className={`${styles.thumbnail} `}>
                        <Link to={postLink }>
                            <img className={`small_card_image_${props.id}`} src={`${props.post.blog_post_image_file_url}?tr=h-25,bl-5`} alt="Image" />
                        </Link>
                    </div>
                    <div className={`${styles.content} align-self-center`}>
                        <div className={`post-meta mb-3 ${styles.post_description}`}>

                            {props.post.blog_post_category && props.post.blog_post_category.map((category) => {
                                return (<a href="javascript:" className={`${styles.category}  category_${category.value}`}><GoPrimitiveDot></GoPrimitiveDot>{category.label}</a>)
                            })}

                            <span className={`${styles.date}`}>{`— ${formatedDate.month} ${formatedDate.day}, ${formatedDate.year}`}</span>
                        </div>
                        <h2 className={`${styles.post_heading}`}><Link to={postLink }>{props.post.blog_post_title}</Link>
                        </h2>
                        <p className={`${styles.post_text}`}>{postExcerpt}</p>

                        <Link to={postLink } className={` d-flex align-items-center ${styles.author_container}`}>
                            <div className={`${styles.author_pic}`}>
                                {props.post.blog_post_author_image_url ? <img src={`${props.post.blog_post_author_image_url}`} alt="Image" /> :
                                    <img src="https://diptanuchakraborty.in/static/media/diptanuchakraborty.9f6010f3.webp" alt="Image" />
                                }
                            </div>
                        

                            <div className={`${styles.author_text}`}>
                                <h3>{props.post.blog_post_author_name}</h3>
                                <h4>{props.post.blog_post_author_designation}</h4>
                            </div>


                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SmallCards
