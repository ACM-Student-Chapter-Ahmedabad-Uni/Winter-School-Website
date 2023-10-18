import React from "react"

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/layout"
import Seo from "../components/seo"
import Schedule from "../components/schedule"
import Navbar from '../components/navbar'

const SchedulePage = () => (
  <>
    <Navbar />
    <Schedule />
  </>
)

export const Head = () => <Seo title="Schedule" />

export default SchedulePage
