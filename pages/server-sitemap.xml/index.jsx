

import React from 'react';
import { getServerSideSitemap, ISitemapField } from 'next-sitemap';
import axios from 'axios';

// This gets called on every request
export async function getServerSideProps(context) {
    // Fetch data from external API
    const queryGetRecent = { 'function': 'getRecent', 'items': 100 };

    const rawResponse = await fetch(`${process.env.NEXT_API_FETCH_POST}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(queryGetRecent)
    });
    const content = await rawResponse.json();

    const val = content.map((item) => {
        return {
            url: `https://blogs.diptanuchakraborty.in/${item.blog_post_title_slug}`,
            changefreq: 'daily',
            priority: 0.7,
        }
    })
    ISitemapField
    // console.log(content)
    // Pass data to the page via props
    return getServerSideSitemap(context, val)


}

const index = () => {
    return <div></div>;
};

export default index;

