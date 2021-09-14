import React,{useState,useEffect} from 'react'
import $ from 'jquery'
import SinglePost from './SinglePost'

const PostDisplay = (props) => {
   
    return (
        <div>
            {/* <h1 className="fs-3 font-weight-bold text-center p-5">Post Display</h1> */}
           {/* news card bootstrap small */}

        {props.posts.map((post,index) => (

            <SinglePost post={post}></SinglePost>


        ))}




        </div>
    )
}

export default PostDisplay
