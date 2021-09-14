import React from 'react'
import * as styles from './source.module.scss';
import {BsLink} from 'react-icons/bs';
const Source = (props) => {
    //fetch the site icon from url using google search api
    const getSiteIcon = (url) => {
        const url_parts = url.split('/');

        if (url_parts.length > 2) {
            return `https://www.google.com/s2/favicons?domain=${url_parts[2]}`;
        }
        return `https://www.google.com/s2/favicons?domain=${url_parts[0]}`;
    }

    const source_url = getSiteIcon(props.source_url);

    return (
        <>
            {/* {props.source_name}
{props.source_url} */}
            <div className="text-start">


                <div className={styles.source_container}>
                 <h5>    <span><BsLink></BsLink></span>Source of this article</h5>
                    <div className={styles.content_container}>
                        <img className={styles.image} src={source_url} alt={props.source_name} />
                        <a className={styles.source_url} href={props.source_url}>{props.source_name}</a>
                    </div>
                    
                </div>
            </div>

        </>
    )
}

export default Source
