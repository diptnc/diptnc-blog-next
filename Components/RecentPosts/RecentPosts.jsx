import React from 'react'
import SmallCards from '../SmallCards/SmallCards'
import Masonry from 'react-masonry-css'

import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import ContentLoader from '../ContentLoader/ContentLoader'


const RecentPosts = (props) => {
   
   
    const [recentPost, setRecentPost] = useState([])


   
    const breakpointColumnsObj = {
        default: 3,
        1100: 2,
        700: 2,
        665: 1
    };

    // const getRecent = async () => {
    //     const query = { 'function': 'getRecent', 'items': 10 };
    //     const res = await axios.post(`${process.env.GATSBY_API_FETCH_POST}`, query)
    //     setRecentPost(res.data)

    //     // setContentLoaded(!contentLoaded)

    // }
    useEffect(() => {
       if (props.recents) {
        setRecentPost(props.recents)
       }

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
                                <SmallCards key={index} id={index} post={post} />
                            )
                        }):
                        (<div></div>)
                        }
                     

                    </Masonry>
                </div>
            </div>
        </>
    )
}

export default RecentPosts