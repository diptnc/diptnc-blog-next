import React,{useEffect,useState} from 'react'
import CategoryLayout from './CategoryLayout'
import axios from 'axios'
import ContentLoader from '../ContentLoader/ContentLoader'
const PostByCategory = () => {

    const [category, setCategory] = useState()
    //fucntion to fetch all the categories
    const fetchCategory = async() => {
        const query = {'function':'getCategory'}
        const res = await axios.post(`${process.env.GATSBY_API_FETCH_CATEGORY}`,query)
        setCategory(res.data)
        console.log(res.data)
    }
useEffect(() => {
    fetchCategory()
}, [])
    return (
        <>
            <div className="container">
                <div className="row g-3">
                    {category?category.map((item,index) => {
                        return (
                            <CategoryLayout id={index} category={item}/>
                        )
                    }):
                    (<ContentLoader></ContentLoader>)
                    }
                </div>
            </div>
        </>
    )
}

export default PostByCategory
