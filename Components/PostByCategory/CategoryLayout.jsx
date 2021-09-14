import React,{useState,useEffect} from 'react'
import CategoryPost from './CategoryPost'
import * as styles from './categorylayout.module.scss'
import axios from 'axios'
const CategoryLayout = (props) => {
    const demo_data = [{ 'value': 'tech', 'label': 'technology' }, { 'value': 'news', 'label': 'News' }]
const [postOfCategory, setpostOfCategory] = useState([])
    const getPostByCategory = async () => {
        const lund = {
            "function": "getPostByCategory",
            "items": 5,
           "category":`${props.category.cat_slug}`
        }
        const response = await axios.post(`${process.env.GATSBY_API_FETCH_POST}`, lund)
        setpostOfCategory(response.data)
        // console.log(response.data)

    }
    useEffect(() => {
        
getPostByCategory()
    }, [])
    return (
        <>
            <div className="col-lg-6">
                <div className="row mb-4">
                    <div className="col-12">
                        <h2 className={styles.section_header}>{props.category.cat_name}
                            <span><svg height={5} width={100}>
                                <line x1={0} y1={0} x2={200} y2={0} style={{ stroke: ' #6600ff', strokeWidth: 3 }} />
                            </svg>
                            </span></h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {postOfCategory.map((post, index) => {
                        return (
                            <CategoryPost name={props.category.cat_name} id={index} post={post} />
                        )
                  
                    })}
                </div>
            </div>
        </>
    )
}

export default CategoryLayout
