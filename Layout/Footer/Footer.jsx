import React from 'react'
import styles from './footer.module.scss'

const Footer = () => {

    return (
        <>
            <div className={styles.footer}>
                <div className="container">

                    <div className="row">
                        <div className="col-md-12">
                            <p className="text-center">
                                <small className={styles.small}>

                                    &copy; {new Date().getFullYear()} . All rights reserved by <a href="https://diptanuchakraborty.in">diptanuchakraborty.in</a>

                                </small>
                            </p>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Footer
