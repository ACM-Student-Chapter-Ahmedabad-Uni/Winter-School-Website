import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/layout"
import Seo from "../components/seo"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { inject } from '@vercel/analytics';

const AccommodationPage = () => (
  <Layout>
    inject();
    <Navbar />

    <Footer />
  </Layout>
)

export const Head = () => <Seo title="Accommodation" />

export default AccommodationPage
