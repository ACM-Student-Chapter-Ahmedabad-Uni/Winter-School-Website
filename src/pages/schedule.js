import React from "react"

import 'bootstrap/dist/css/bootstrap.min.css';
import Seo from "../components/seo"
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { AccordionCustomStyles } from "../../src/components/schedule.js"; // Replace with the actual path to your component


const SchedulePage = () => (
  <>
    <Navbar />
    <section>
      <div className="container px-4 py-16 mx-auto space-y-8 lg:max-w-3xl">
        <h2 className="text-2xl font-bold md:text-4xl text-center">Schedule</h2>
        <div className="space-y-8">
          <AccordionCustomStyles />
        </div>
      </div>
    </section>
    <Footer/>
  </>
)

export const Head = () => <Seo title="Schedule" />

export default SchedulePage
