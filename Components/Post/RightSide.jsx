import React from 'react'
import * as styles from './right.module.scss';


import {

    EmailShareButton,
    FacebookShareButton,


    LinkedinShareButton,

    TelegramShareButton,

    TwitterShareButton,

    WhatsappShareButton

} from "react-share";
import { BiMailSend, BiPaperPlane } from 'react-icons/bi';
import { FiFacebook, FiLinkedin, FiShare2, FiTwitter } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa';
import {useRouter} from 'next/router';
const RightSide = (props) => {
      const router = useRouter()
//     const url = typeof window !== 'undefined' ? window.location.href : '';
      const url = `https://blogs.diptanuchakraborty.in${router.asPath}`;

    return (
        <>
            <div className="col-lg-3">
                <div className={styles.card} data-sticky data-margin-top={100} data-sticky-for={991} style={{}}>

                    <h4 className={styles.header}><FiShare2></FiShare2> Share this article</h4>

                    <div className={styles.share}>
                        <EmailShareButton subject="Check out this article" url={`${url}`} >
                            <BiMailSend></BiMailSend>
                        </EmailShareButton>

                        <FacebookShareButton url={`${url}`}  quote={`Check out this article | ${props.blog_title} ${url} `} hashtag={"#diptanuchakraborty_in #diptnc"}>
                            <FiFacebook></FiFacebook>
                        </FacebookShareButton>



                        <LinkedinShareButton url={`${url}`} title={props.blog_title} description={`Check out this article ${url} `} >
                            <FiLinkedin />
                        </LinkedinShareButton>

                        <TelegramShareButton url={`${url}`} title={props.blog_title} >
                            <BiPaperPlane></BiPaperPlane>
                        </TelegramShareButton>

                        <TwitterShareButton url={`${url}`} title={props.blog_title} via={"diptnc"} hashtags={["diptanuchakraborty.in", "diptnc"]}>
                            <FiTwitter></FiTwitter>
                        </TwitterShareButton>

                        <WhatsappShareButton url={`${url}`} title={props.blog_title}>
                            <FaWhatsapp></FaWhatsapp>
                        </WhatsappShareButton>
                    </div>
                    {/* Advertisement */}
                    {/* <div className="mt-4">
                        <a href="#" className="d-block card-img-flash">
                            <img src="assets/images/adv.png" alt="" />
                        </a>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default RightSide
