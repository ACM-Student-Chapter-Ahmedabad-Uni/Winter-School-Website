import React from "react"

import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import Carousel from "../components/carousel"
import Navbar from "../components/navbar"
import CardUI from "../components/cardsUI"
import CardsUI from "../components/cardsUI"
import Team from "../components/team_try"
import Footer from "../components/footer"
import Card from "../components/card"
import Cards from "../components/cards"
import CardContainer from "../components/cardcontainer"

const SchedulePage = () => (
  <Layout>
    <Navbar />
    <Footer />
  </Layout>
)

export const Head = () => <Seo title="Schedule" />

export default SchedulePage
