import React from 'react'
import * as styles from './Heading.module.scss'
const Heading = (props) => {
    return (
        <>
            <h1 className={`${styles.heading} text-${props.position}`}>{props.text} <span>.</span></h1>
        </>
    )
}

export default Heading
