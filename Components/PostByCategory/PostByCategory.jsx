import React,{useEffect,useState} from 'react'
import CategoryLayout from './CategoryLayout'

import ContentLoader from '../ContentLoader/ContentLoader'
const PostByCategory = (props) => {

    const [category, setCategory] = useState(props.category)
    //fucntion to fetch all the categories
  
    return (
        <>
            <div className="container">
                <div className="row g-3">
                    {category && category?category.map((item,index) => {
                        return (
                            <CategoryLayout key={index} id={index} category={item}/>
                        )
                    }):
                    (null)
                    }
                </div>
            </div>
        </>
    )
}

export default PostByCategory
