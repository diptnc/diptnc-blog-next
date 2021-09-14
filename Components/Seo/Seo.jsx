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
            {/* <meta name="keywords" content={props.tags.map((curr)=>(curr.value))}/> */}
            <meta name="robots" content="index, follow" />
            <meta httpequiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="revisit-after" content="1 days" />
            <meta name="author" content="Diptanu chakraborty" />
            <meta property="og:title" content="Homepage | Blogs | News" />
            <meta property="og:description" content="A collection of sourced information from various categories is gathered in one location. Get efficient information about the latest trending topics to refresh your mind on a daily basis with updated news about technology, world affairs, current affairs, tutorials, and so on." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://blogs.diptanuchakraborty.in" />
            <meta property="og:image" content="https://cdn.diptanuchakraborty.in/diptanuchakraborty_in/assets/seo/og/og_asset.jpg" />
            <meta property="og:image:alt=" content="Diptanu chakraborty" />
            <meta property="og:site_name" content="Blogs | Diptanuchakraborty.in" />
            <meta property="og:locale" content="en_US" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:description" content="A collection of sourced information from various categories is gathered in one location. Get efficient information about the latest trending topics to refresh your mind on a daily basis with updated news about technology, world affairs, current affairs, tutorials, and so on." />
            <meta name="twitter:title" content="Homepage | Blogs | News" />
            <meta name="twitter:site" content="@diptnc" />
            <meta name="twitter:image" content={props.image} />
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
