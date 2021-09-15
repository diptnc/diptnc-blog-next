


import React, { useState, useEffect } from 'react'
import Layout from '../Layout/Layout'
import RightSide from '../Components/Post/RightSide'
import PostBody from '../Components/Post/PostBody'
import LeftSide from '../Components/Post/LeftSide'
import axios from 'axios'
import TopSide from '../Components/Post/TopSide'
import { useRouter } from 'next/router'
import Head from 'next/head'
import loadable from '@loadable/component'
import ContentLoader from '../Components/ContentLoader/ContentLoader'
import NotFoundPage from './404'

//loadabel seo componenet

import Seo from '../Components/Seo/Seo'






const Sticky = typeof window !== `undefined` ? require("sticky-js") : null







const PostSinglePage = (props) => {
    const router = useRouter()

    const [notfound, setnotfound] = useState(false)
    // if (!LeftSide) {
    //   return null
    // }



    const [post, setpost] = useState(props.post[0])
    const [author, setauthor] = useState(null)

    const [apiLoaded, setapiLoaded] = useState(false)




    const slug = router.query.id;
    if (typeof window !== `undefined`) {
        var sticky = new Sticky('[data-sticky]');
    }


    const getAuthor = async (username) => {
        const query = { 'function': 'getAuthorDetails', 'username': `${username}` }
        const res = await axios.post(`${process.env.NEXT_API_FETCH_AUTHOR_DETAILS}`, query)
        setauthor(res.data[0])

    }
    //   const getPost = async () => {
    //     const query = { 'function': 'getPostBySlug', 'slug': `${slug}` };
    //     const res = await axios.post(`${process.env.GATSBY_API_FETCH_POST}`, query)
    //     if (res.data.length > 0) {
    //      setpost(res.data[0])
    //     getAuthor(res.data[0].blog_post_author_username)

    //     }
    //   else{
    //     // redirect to 404
    //     setnotfound(true)


    //   }

    useEffect(() => {
        getAuthor(post.blog_post_author_username)
    }, [])





    return (
        <>

            <Seo title={post.blog_post_title} content={post.blog_post_content} image={post.blog_post_image_file_url} tags={post.blog_post_tags}></Seo>




            <Layout>



                <div className="container position-relative" data-sticky-container>
                    <div className="row">
                        {post ? (<TopSide post={post}></TopSide>) : (null)}


                        {author && post ? (<LeftSide author={author} post={post}></LeftSide>) : (null)}



                        {post ? (<PostBody post={post}></PostBody>) : (null)}

                        {post ? (<RightSide blog_title={post.blog_post_title}></RightSide>) : (<div></div>)}




                    </div>
                </div>



            </Layout>
        </>
    )
}


export default PostSinglePage




export async function getServerSideProps(context) {
    const pageSlug = context.query.id;
    const getPostQuery = { 'function': 'getPostBySlug', 'slug': `${pageSlug}` };
    const getPostResponse = await axios.post(`https://webhooks.mongodb-realm.com/api/client/v2.0/app/diptnc-blog-ngzlx/service/blog_post/incoming_webhook/webhook0`, getPostQuery)
    if (!getPostResponse.data.length > 0) {
        return {
            redirect: {
                destination: '/404',
                permanent: false,
            },
        }
    } else {
        return {
            props: { 'post': getPostResponse.data }
        }
    }
}