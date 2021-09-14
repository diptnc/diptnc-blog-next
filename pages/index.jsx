import axios from 'axios'
import Head from 'next/head'
import Link from 'next/link'
export async function getServerSideProps() {
  const query = { 'function': 'getRecent', 'items': 10 };
  const res = await axios.post("https://webhooks.mongodb-realm.com/api/client/v2.0/app/diptnc-blog-ngzlx/service/blog_post/incoming_webhook/webhook0", query);
  return {
    props: { 'heda': res.data }

  }
}
export default function Home(props) {

  return (
    <>
      
      <h1>chur</h1>
      {props.heda.map((curr, index) => {
        return (<><h1 key={index}>{curr.blog_post_title}</h1> <Link href={`${index}`}>bal</Link></>)
      })}



    </>
  )
}
