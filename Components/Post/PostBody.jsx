import React, { useEffect } from 'react'
import * as styles from './post.module.scss';
import Source from './Source';

import $ from 'jquery';
import SimpleReactLightBox, { SRLWrapper } from 'simple-react-lightbox'

const PostBody = (props) => {
    useEffect(() => {
        var myImage = new Image();
        myImage.src = `${props.post.blog_post_image_file_url}`;
        myImage.alt = `${props.post.blog_post_title}`;
        myImage.className = `main_image_class_${props.post._id.$oid} ${styles.image}`;

        $(myImage).on('load', function () {


            $(`.main_image_class_${props.post._id.$oid}`).replaceWith(myImage);
        });


    }, [])



    return (
        <>
            <div className="col-lg-7 mb-5">
                <div className={`${styles.blog_post_content}`}>
                    <div className="blog_image_container">
                        <SimpleReactLightBox>
                            <SRLWrapper >
                                <img srl_gallery_image="true" src={`${props.post.blog_post_image_file_url}?tr=h-25,bl-5`} className={`main_image_class_${props.post._id.$oid} ${styles.image}`} alt={props.post.blog_post_title} />
                            </SRLWrapper></SimpleReactLightBox>
                    </div>

                    {props.post.blog_post_source ? <Source source_name={props.post.blog_post_source} source_url={props.post.blog_post_source_url}></Source> : ''}


                    <div className={`${styles.blog_post_body}`}>
                        {/* <hr className={styles.separator}/> */}
                        <div dangerouslySetInnerHTML={{ __html: props.post.blog_post_content }} />
                    </div>

                </div>


            </div>

        </>
    )
}

export default PostBody
