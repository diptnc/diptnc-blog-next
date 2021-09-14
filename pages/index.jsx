
export async function getServerSideProps(context) {
  const query = { 'function': 'getTrending', 'items': 10 };
  const res = await axios.post(`https://webhooks.mongodb-realm.com/api/client/v2.0/app/diptnc-blog-ngzlx/service/blog_post/incoming_webhook/webhook0`, query)
  return {
      props: { 'trending': res.data}
  }
}


import React from 'react'
import axios from 'axios'
import Layout from '../Layout/Layout'
import TrendingSlider from '../Components/TrendingSlider/TrendingSlider'
import Heading from '../Components/Heading/Heading'
const index = (props) => {
 
  return (
    <>
      <Layout>
        <Heading text="Trending" position="center"></Heading>
        <TrendingSlider trending={props.trending}></TrendingSlider>
      </Layout>
    </>
  )
}

export default index

