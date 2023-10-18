import React from "react"

import 'bootstrap/dist/css/bootstrap.min.css'; 
import Layout from "../components/layout"
import Seo from "../components/seo"
import Schedule from "../components/schedule"

const SchedulePage = () => (
  <Layout>
    <Schedule />
  </Layout>
)

export const Head = () => <Seo title="Schedule" />

export default SchedulePage
