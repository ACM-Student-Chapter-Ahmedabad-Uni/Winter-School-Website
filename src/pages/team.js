import * as React from "react"

import Seo from "../components/seo"
import TeamCard from "../components/teamCard"
import Navbar from "../components/navbar"

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


const TeamPage = () => (
  <>
    <Navbar />
    <div class="container my-24 mx-auto md:px-6">
      <section class="mb-32 text-center">
        <h2 class="mb-12 text-3xl font-bold">
          Meet the Team
        </h2>

        <div class="lg:gap-xl-12 grid gap-x-6 md:grid-cols-3 xl:grid-cols-4">
          {data.Speakers.map((name) => <TeamCard name={name} />)}

        </div>
      </section>
    </div>
  </>
)

export const Head = () => <Seo title="Meet the Team" />

export default TeamPage
