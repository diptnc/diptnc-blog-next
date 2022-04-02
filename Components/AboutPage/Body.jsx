import React from 'react'
import Seo from '../Seo/Seo'
import Styles from './body.module.scss'
export const Body = () => {
    return (
        <>
        <Seo title="About Page" content=" Welcome to blogs.diptanuchakraborty.in- your number one source for all latest blogs.                
                         We're dedicated to giving you the very best of articles, with a focus on short, simple, satisfaction. We're not a news outlet, but we're a community of people who love to share their knowledge and experience." type={"page"}>


                         </Seo>
            <div className={`${Styles.about_page_text_container}`}>
                <div className={`${Styles.about_page_text_container_inner}`}>
                    <p>
                        {/* about page content for news and blogging  website*/}

                        Welcome to <a href='https://www.blogs.diptanuchakraborty.in'>blogs.diptanuchakraborty.in</a> - your number one source for all latest blogs.
                        <br>
                        </br>
                        <br />
                         We're dedicated to giving you the very best of articles, with a focus on short, simple, satisfaction. We're not a news outlet, but we're a community of people who love to share their knowledge and experience.
                        <br />
                        <br />


                        Founded in 2021 by Diptanu chakraborty, <a href='https://www.blogs.diptanuchakraborty.in'>blogs.diptanuchakraborty.in</a>  has come a long way from its beginnings.
                        <br />




                        I/we hope you enjoy the Articles and we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact me.

<br></br>
<br></br>
                        Sincerely,
<br></br>
                     <strong>  Diptanu chakraborty</strong>




                    </p>
                </div>
            </div>
        </>
    )
}
