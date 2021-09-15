import React, { useState, useEffect } from 'react'
import Head from 'next/head'
const Seo = (props) => {
    const [postExcerpt, setPostExcerpt] = useState('')



    useEffect(() => {

        // let rawDate = props.post.blog_post_date //in y-m-d
        // let date = new Date(rawDate)
        // let day = date.getDate()

        // //get month name
        // let monthName = date.toLocaleString('default', { month: 'long' })
        // let year = date.getFullYear()
        // setFormatedDate({ day: day, month: monthName, year: year })





        //make excerpt content shorter and clean it up


        let excerpt = props.content;
        excerpt = new DOMParser().parseFromString(excerpt, 'text/html');
        excerpt = excerpt.body.textContent;
        // let shortExcerpt = excerpt.substring(0, 300) + '...'
        setPostExcerpt(excerpt)




    }, [])
    return (
        <Head>

            <title>{props.title}</title>
            <meta name="title" content={props.title} />
            <meta name="description" content={postExcerpt} />

            <link rel="shortcut icon" href="/favicon.ico" />

            <meta name="keywords" content={props.tags?props.tags.map((curr,index)=>(curr.text)):"tripura news today,tripura news channel,tripura news channel live,tripura newspaper,tripura education news,tripura exam news,tripura employment news,tripura government news,google tripura news,tripura news website,www.tripura news today,west tripura news,www.tripura news.com,www.headlines tripura news.com,www.kok tripura news.com,www.tripura times news.com,tripura E news, online tripura news , latest news in india in english,latest news in india today in english,latest news in india sports,latest news in india business,latest news in india bollywood,latest news in india live"}/>

            <meta name="robots" content="index, follow" />
            <meta httpequiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="revisit-after" content="1 days" />
            <meta name="author" content="Diptanu chakraborty" />
            <meta property="og:title" content={props.title} />
            <meta property="og:description"  content={postExcerpt}  />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={props.link?props.link:"https://blogs.diptanuchakraborty.in"} />
            <meta property="og:image" content="https://cdn.diptanuchakraborty.in/diptanuchakraborty_in/assets/seo/og/og_asset.jpg" />
            <meta property="og:image:alt=" content="Diptanu chakraborty" />
            <meta property="og:site_name" content="Blogs | Diptanuchakraborty.in" />
            <meta property="og:locale" content="en_US" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:description"content={postExcerpt} />
            <meta name="twitter:title"content={props.title} />
            <meta name="twitter:site" content="@diptnc" />
            <meta name="twitter:image" content={props.image ? props.image :"https://cdn.diptanuchakraborty.in/diptanuchakraborty_in/assets/seo/og/og_asset.jpg" } />
            <link rel="canonical" href="https://blogs.diptanuchakraborty.in" />
            <link rel="alternate" href="https://blogs.diptanuchakraborty.in" hrefLang="en" />
            <link rel="alternate" href="https://blogs.diptanuchakraborty.in" hrefLang="hi" />
            <link rel="alternate" href="https://blogs.diptanuchakraborty.in" hrefLang="bn" />
            <link rel="alternate" href="https://blogs.diptanuchakraborty.in" hrefLang="ta" />
            <link rel="alternate" href="https://blogs.diptanuchakraborty.in" hrefLang="te" />
            <link rel="alternate" href="https://blogs.diptanuchakraborty.in" hrefLang="ml" />
            <link rel="alternate" href="https://blogs.diptanuchakraborty.in" hrefLang="mr" />
            <link rel="alternate" href="https://blogs.diptanuchakraborty.in" hrefLang="gu" />

        </Head>
    )
}

export default Seo
