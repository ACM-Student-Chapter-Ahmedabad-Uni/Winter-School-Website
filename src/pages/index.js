import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import Carousel from "../components/carousel"
import Navbar from "../components/navbar"
import Card from "../components/card"
import Cards from "../components/cards"
import CardContainer from "../components/cardcontainer"

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Carousel />
    <CardContainer/>
  
    
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
