import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const data = {
  "Speakers": [
    "Sougata",
    "Sitabhra",
    "Santhanam",
    "Ramasuri",
    "Nitendra",
    "Sayan",
    "Seema"
  ]
}


const SpeakersPage = () => (
  <Layout>
    <h1>SPEAKERS</h1>
    
  </Layout>
)

export const Head = () => <Seo title="Speakers" />

export default SpeakersPage
