import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import Carousel from "../components/carousel"
import Navbar from "../components/navbar"


const IndexPage = () => (
  <Layout>
    <Navbar/>
    <Carousel />
    
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
