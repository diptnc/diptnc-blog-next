import React from 'react'
import s from './loader.module.scss'
const LoaderRoute = () => {
    return (
        <>
            <div className={s.body}>
                <div className={s.loader}>
                    <span />
                    <span />

                    <span />
                    <span />
                </div>

            </div>
            <div className={s.innertext}>
                {/* <h1>Loading</h1> */}
            </div>
        </>
    )
}

export default LoaderRoute
