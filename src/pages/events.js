import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Schedule from "../components/schedule"

const NotFoundPage = () => (
  <Layout>
    <Schedule />
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
