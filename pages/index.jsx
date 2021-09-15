
export async function getServerSideProps(context) {
  const query = { 'function': 'getTrending', 'items': 10 };
  const res = await axios.post(`${process.env.NEXT_API_FETCH_POST}`, query)

  const queryGetRecent = { 'function': 'getRecent', 'items': 10 };
  const resGetRecent = await axios.post(`${process.env.NEXT_API_FETCH_POST}`, queryGetRecent)



  const queryGetPopular = { 'function': 'getPopular', 'items': 10 };
  const resGetPopular = await axios.post(`${process.env.NEXT_API_FETCH_POST}`, queryGetPopular)


    const queryGetCategory = {'function':'getCategory'}
    const resGetCategory = await axios.post(`${process.env.NEXT_API_FETCH_CATEGORY}`,queryGetCategory)








  return {
    props: { 'trending': res.data, 'recents': resGetRecent.data, 'popular': resGetPopular.data,'category':resGetCategory.data }
  }
}


import React from 'react'
import axios from 'axios'
import Layout from '../Layout/Layout'
import TrendingSlider from '../Components/TrendingSlider/TrendingSlider'
import Heading from '../Components/Heading/Heading'
import RecentPosts from '../Components/RecentPosts/RecentPosts'
import PopularPost from '../Components/PopularPost/PopularPost'
import PostByCategory from '../Components/PostByCategory/PostByCategory'
const index = (props) => {

  return (
    <>
      <Layout>
        <Heading text="Trending" position="center"></Heading>
        <TrendingSlider trending={props.trending}></TrendingSlider>
        <Heading text="Recent Posts" position="center"></Heading>
        <RecentPosts id={0} recents={props.recents}></RecentPosts>
        <Heading text="Most Popular Posts" position="center"></Heading>
        <PopularPost popular={props.popular}></PopularPost>
        <Heading text="Posts By Category" position="center"></Heading>
        <PostByCategory category={props.category}></PostByCategory>
      </Layout>
    </>
  )
}

export default index

