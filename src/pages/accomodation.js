import React from "react"

import 'bootstrap/dist/css/bootstrap.min.css'; 
import Layout from "../components/layout"
import Seo from "../components/seo"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

const AccomodationPage = () => (
  <Layout>
    <Navbar />
    <Footer />
  </Layout>
)

export const Head = () => <Seo title="Accomodation" />

export default AccomodationPage
