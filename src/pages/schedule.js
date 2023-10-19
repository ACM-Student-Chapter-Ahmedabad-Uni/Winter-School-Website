import React from "react"

import 'bootstrap/dist/css/bootstrap.min.css';
import Seo from "../components/seo"
import Schedule from "../components/schedule"
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const data = {
  "Days": [
    {
    "Day": "Day 1",
    "Schedule" : [
      {
        time: "8:00 -- 8:45",
        event: "Breakfast"
      },
      {
        time: "9:00 — 10:30",
        event: "Amit"
      },
      {
        time: "10:30 -- 10:45",
        event: "Tea"
      },
      {
        time: "10:45 — 12:15",
        event: "Sougata"
      },
      {
        time: "12:30 -- 1:30",
        event: "Lunch"
      },
      {
        time: "1:30 — 3:00",
        event: "Sougata"
      },
      {
        time: "Break",
        event: ""
      },
      {
        time: "3:15 — 4:45",
        event: "Gephi NodeXL"
      },
      {
        time: "4:45 — 5:30",
        event: "High-Tea"
      },
      {
        time: "6:00 — 7:00",
        event: "Infinity Band"
      },
      {
        time: "7:30 — 8:15",
        event: "Dinner"
      }
    ]
  },
  ]
}

const SchedulePage = () => (
  <>
    <Navbar />
    <section class="bg-gray-800 text-gray-100">
      <div class="container px-4 py-16 mx-auto space-y-8 lg:max-w-3xl">
        <h2 class="text-2xl font-bold md:text-4xl">Timeline</h2>
        <div class="space-y-8">
        {data.Days.map((day) => <Schedule day={day} />)}
        </div>
      </div>
    </section>
    <Footer/>
  </>
)

export const Head = () => <Seo title="Schedule" />

export default SchedulePage
