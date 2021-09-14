import React from 'react'
import SmallCards from '../SmallCards/SmallCards'
import Masonry from 'react-masonry-css'
import '../../Layout/GlobalStyle/masonryLayout.scss'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import ContentLoader from '../ContentLoader/ContentLoader'


const RecentPosts = (props) => {
   
    const demo_data = [{ 'value': 'tech', 'label': 'technology' }, { 'value': 'news', 'label': 'News' }]
    const [recentPost, setRecentPost] = useState()


   
    const breakpointColumnsObj = {
        default: 3,
        1100: 2,
        700: 2,
        665: 1
    };

    const getRecent = async () => {
        const query = { 'function': 'getRecent', 'items': 10 };
        const res = await axios.post(`${process.env.GATSBY_API_FETCH_POST}`, query)
        setRecentPost(res.data)

        // setContentLoaded(!contentLoaded)

    }
    useEffect(() => {
        getRecent()

    }, [])

    return (
        <>
            <div className="container">
                <div className="">
                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column"
                    >
                        {recentPost?recentPost.map((post, index) => {
                            return (
                                <SmallCards id={index} post={post} />
                            )
                        }):
                        (<ContentLoader></ContentLoader>)
                        }
                        {/* <SmallCards cat_slug={demo_data} id="1" image_url="https://ik.imagekit.io/diptnc/sample2" ></SmallCards>
                        <SmallCards cat_slug={demo_data} id="2" image_url="https://ik.imagekit.io/diptnc/sample1" ></SmallCards>
                        <SmallCards cat_slug={demo_data} id="3" image_url="https://ik.imagekit.io/diptnc/sample2" ></SmallCards>
                        <SmallCards cat_slug={demo_data} id="4" image_url="https://ik.imagekit.io/diptnc/sample1" ></SmallCards>
                        <SmallCards cat_slug={demo_data} id="5" image_url="https://ik.imagekit.io/diptnc/sample2" ></SmallCards> */}

                    </Masonry>
                </div>
            </div>
        </>
    )
}

export default RecentPosts