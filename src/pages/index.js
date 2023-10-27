import React from "react"

import 'bootstrap/dist/css/bootstrap.min.css'; 
import Layout from "../components/layout"
import Seo from "../components/seo"
import Carousel from "../components/carousel"
import Navbar from "../components/navbar"
import CardsUI from "../components/cardsUI"
import Team from "../components/team_try"
import Footer from "../components/footer"

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Carousel />
    <div style={{ height: '60px', background: '#f8f8f8' }}></div>
    <CardsUI />
    {/* <Team /> */}
    <Footer />
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
