import axios from 'axios'
import Head from 'next/head'

import styles from '../styles/Home.module.css'

export async function getStaticProps() {
  const query = { 'function': 'getRecent', 'items': 10 };
  const res = await axios.post("https://webhooks.mongodb-realm.com/api/client/v2.0/app/diptnc-blog-ngzlx/service/blog_post/incoming_webhook/webhook0", query);

  return {
    props: { 'heda': res.data }, // will be passed to the page component as props
    revalidate: 10,

  }
}
export default function Home(props) {
  return (
    <>
      <Head>
        <title>Create heda</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <h1>chur</h1>
      {props.heda.map((curr, index) => {
        return (<h1 key={index}>{curr.blog_post_title}</h1>)
      })}



    </>
  )
}
