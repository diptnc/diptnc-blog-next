import React, { useEffect, useState } from 'react'
import $ from 'jquery'
import axios from 'axios'
import * as styles from './leftside.module.scss'
import { AiOutlineHeart, AiFillHeart, AiOutlineEye } from 'react-icons/ai'


const LeftSide = ({ author, post }) => {

    const [liked, setLiked] = useState(false);
    const [showLikedMsg, setShowLikedMsg] = useState(false);


    const [formatedDate, setFormatedDate] = useState({
        day: '',
        month: 'month',
        year: ''
    })

    const [watch, setwatch] = useState(parseInt(post.blog_post_watch_count.$numberInt))
    //update watch value 
    const updateWatch = async () => {

        const query = { 'function': 'updateWatchCount', 'watch': watch + 1, 'postId': post.blog_post_time_stamp.$numberLong }
        const res = await axios.post(`${process.env.NEXT_API_FETCH_POST}`, query)
        console.log(res.data, post.blog_post_time_stamp, watch)


    }

    const updateLike = () => {
        setLiked(!liked)

    }

    useEffect(() => {
        //watch
        //increment watch value
        const currentWatch = parseInt(post.blog_post_watch_count.$numberInt)


        setwatch(currentWatch + 1)

        let rawDate = post.blog_post_date //in y-m-d
        let date = new Date(rawDate)
        let day = date.getDate()

        //get month name
        let monthName = date.toLocaleString('default', { month: 'long' });
        let year = date.getFullYear();
        setFormatedDate({ day: day, month: monthName, year: year });


        // function to calculate total read post in words
        const totalReadTime = (content) => {
            let totalTime = 0
            let words = content.split(' ')
            words.forEach(word => {
                totalTime += word.length
            })
            return Math.ceil(totalTime / 200)
        }
        //get total read time
        const totalRead = totalReadTime(post.blog_post_content)
        //print to dom with formated text
        $('.read_time').html('<strong>' + totalRead + '</strong> min read')


        var myImage = new Image();
        myImage.src = `${post.blog_post_image_file_url}`;
        myImage.alt = `${post.blog_post_title}`;
        console.log(myImage);
        $(myImage).on('load', function () {
            $(`.post_image`).replaceWith(myImage);
        });
    }, [])

    useEffect(() => {
        updateWatch()
    }, [])

    useEffect(() => {

        //show a popup saying this feature is coming soon
        if (liked) {
            setShowLikedMsg(!showLikedMsg)

        }
    }, [liked])
    return (
        <>

            <div className="col-lg-2">
                <div className={`${styles.card} text-start text-lg-center mb-5`} data-sticky data-margin-top={100} data-sticky-for={991} style={{}}>


                    <div className="position-relative">
                        <div className={`${styles.author} avatar-xl`}>
                            <div className={styles.author_cover}> </div>
                            <img className="avatar-img rounded-circle" src={author.image_url} alt={author.name} />

                        </div>
                        <a href="https://diptanuchakraborty.in" className={`${styles.name} stretched-link mt-2 mb-0 d-block`}>{author.name}</a>
                        <p className={styles.designation}>{author.designation}</p>
                    </div>
                    <hr className={styles.separator} />

                    <ul className={`${styles.info} list-inline list-unstyled`}>
                        <li className={`${styles.date} list-inline-item d-lg-block my-lg-2`}>{`— ${formatedDate.month} ${formatedDate.day}, ${formatedDate.year}`}</li>
                        <li className={`${styles.read} read_time list-inline-item d-lg-block my-lg-2`}></li>
                        {showLikedMsg?  <div className="alert alert-info alert-dismissible fade show" role="alert">
                             <p className={styles.error}>This feature is coming soon</p>
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
                        </div> : null}
                      

                        <li className="list-inline-item d-lg-block my-lg-2"><button onClick={() => updateLike()} className={`${styles.like}`}>{liked ? <AiFillHeart /> : <AiOutlineHeart></AiOutlineHeart>}</button></li>
                        <li className={`${styles.watch} list-inline-item d-lg-block my-lg-2 justify-content-center`}><AiOutlineEye /> {watch} Views</li>
                    </ul>
                    {/* Tags */}
                    <ul className="list-inline text-primary-hover mt-0 mt-lg-3 text-center">
                        {post.blog_post_tags.map((tag) => {
                            return (
                                // <li className="list-inline-item">
                                <a className={styles.tag} href="javascript:">#{tag.text} </a>
                                // </li>
                            )
                        }
                        )}

                    </ul>
                </div>

            </div>
        </>
    )
}

export default LeftSide
