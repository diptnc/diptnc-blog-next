import React from 'react'
import { Body } from '../Components/AboutPage/Body'
import Heading from '../Components/Heading/Heading'
import Layout from '../Layout/Layout'

const about = () => {
  return (
<Layout>
    
<Heading text="About Page" position="center"></Heading>
<div className="container">
    <Body></Body>
</div>

</Layout>
  )
}

export default about