const siteUrl = "https://blogs.diptanuchakraborty.in";
module.exports={
    siteUrl,
    generateRobotsTxt: true,
    robotsTxtOptions: {
        additionalSitemaps: [
            `${siteUrl}/server-sitemap.xml`,
        ],

    }
}