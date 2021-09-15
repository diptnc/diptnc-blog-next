
import React, { useState, useEffect } from 'react'
import ContentLoader from '../../Components/ContentLoader/ContentLoader'
import PostDisplay from '../../Components/PostsComponents/PostDisplay'
import Layout from '../../Layout/Layout'
import axios from 'axios'

import * as styles from './posts.module.scss'


export async function getServerSideProps(context) {

    const queryGetCategory = { 'function': 'getCategory' }
    const resGetCategory = await axios.post(`${process.env.NEXT_API_FETCH_CATEGORY}`, queryGetCategory)





    return {
        props: { 'category': resGetCategory.data },
    }
}

const Posts = (props) => {
    const [posts, setPosts] = useState()
    const [pageNumber, setPageNumber] = useState(1)
    const [postPerPage, setPostPerPage] = useState(15)
    const [category, setCategory] = useState('')
    const [selectCategory, setSelectCategory] = useState([])
    const [sortOrder, setSortOrder] = useState(-1)
    const [pagination, setPagination] = useState(0)


    const getPosts = async () => {
        let query = category ? { "function": "getAllPostByQuery", "category": { "blog_post_category.value": category }, "pageNumber": pageNumber, "nPerPage": postPerPage, "sortingOrder": sortOrder } : { "function": "getAllPostByQuery", "category": {}, "pageNumber": pageNumber, "nPerPage": postPerPage, "sortingOrder": sortOrder }

        const res = await axios.post(process.env.NEXT_API_FETCH_POST, query)
        setPosts(res.data.result)
        //pagination calculation
        let totalPost = parseInt(res.data.count.$numberLong)
        let totalPage = Math.ceil(totalPost / postPerPage)
        setPagination(totalPage)


    }


    useEffect(() => {
  
        if (props.category) {
            setSelectCategory(props.category)
        }

    }, [])

    useEffect(() => {
        setPosts(null)
        getPosts()
    }, [category, pageNumber, postPerPage, sortOrder])



    return (
        <>
            <Layout>
                <div className="container position-relative">
                    {/* create a menu to select the category,sort order */}
                    <div className="row " >
                        <div className="col-md-12 "   >
                            <div className={`${styles.select_container} card`}>
                                <div className="card-body">
                                    <div className="row  ">
                                        <div className="col-6 ">
                                            <div className="form-group">
                                                <label htmlFor="category " className={styles.cathead}>Category</label>
                                                <select className={`form-control ${styles.category} `} id="category" onChange={(e) => setCategory(e.target.value)}>
                                                    <option value="">All</option>
                                                    {selectCategory && selectCategory.map((curr,index) => {
                                                        return <option key={index} value={curr.cat_slug}>{curr.cat_name}</option>
                                                    })
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-group">
                                                <label htmlFor="sortOrder" className={styles.cathead}>Sort Order</label>
                                                <select className={`form-control ${styles.category}`} id="sortOrder" onChange={(e) => setSortOrder(parseInt(e.target.value))}>
                                                    <option value="-1">Newest</option>
                                                    <option value="1">Oldest</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* display the posts */}
                    {posts ? <PostDisplay posts={posts}></PostDisplay> :null}


                    {/* pagination */}
                    <div className="row">
                        <div className="col-md-12">
                            <nav aria-label="Page navigation example">
                                <ul className="pagination justify-content-center">


                                    {[...Array(pagination)].map((_, index) => <li key={index} className="page-item"><a className={`page-link ${styles.pageLink}`} onClick={(e) => setPageNumber(parseInt(index) + 1)} href="#">{index + 1}</a></li>)}

                                </ul>
                            </nav>
                        </div>
                        { }
                    </div>

                </div>
            </Layout>
        </>
    )
}

export default Posts
