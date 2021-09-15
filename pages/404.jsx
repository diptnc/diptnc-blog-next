import React from 'react'
import Layout from '../Layout/Layout'
import style from '../styles/404.module.scss'
import { BiHomeAlt, BiEnvelope } from 'react-icons/bi'
import Link from 'next/link'
const Error4_0_4 = () => {
    return (
        <>
            <Layout>
                <div className={style.body}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="error-template p-5 text-center">
                                    <h1 className={style.heading}>
                                        Oops!</h1>
                                    <h2 className={style.subheading}>
                                        404 Not Found</h2>
                                    <div className={style.para}>
                                        Sorry, an error has occured, Requested page not found!
                                    </div>
                                    <div className={style.contents}>
                                        <Link href="/">
                                            <a className={` btn btn-primary btn-lg home`}>
                                                <BiHomeAlt />
                                                Take Me Home


                                            </a>
                                        </Link>

                                        <Link href="http://www.jquery2dotnet.com" >
                                            <a className="btn btn-default btn-lg contact">
                                                <BiEnvelope />  Contact Support
                                            </a>

                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}

export default Error4_0_4
