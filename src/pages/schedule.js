import React from "react"

import 'bootstrap/dist/css/bootstrap.min.css';
import Seo from "../components/seo"
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { AccordionCustomStyles } from "../../src/components/schedule.js"; // Replace with the actual path to your component
import { inject } from '@vercel/analytics';

const SchedulePage = () => {
  inject();
  return <>
    <Navbar />
    <section>
      <div className="container px-4 py-16 mx-auto space-y-8 lg:max-w-3xl">
        <h2 className="text-2xl font-bold md:text-4xl text-center">Schedule</h2>
        <h2 className="text-2xl font-bold md:text-2xl text-center">(Venue: School of Arts and Sciences, Room 004)</h2>
        <div className="space-y-8">
        {/* <iframe title="schedule" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRM0yU9FSljgQIi91x0QT2rTI8hufwAGDI6jAZYVEeW84pDymz-FGx-BF_h3uX8BcuXNH2w92AQBnx-/pubhtml?gid=1009124292&amp;single=true&amp;widget=true&amp;headers=false" width="100%" height="525" scrolling="no"></iframe> */}
        <AccordionCustomStyles/>
        </div>
      </div>
    </section>
    <Footer />
  </>
}

export const Head = () => <Seo title="Schedule" />

export default SchedulePage
