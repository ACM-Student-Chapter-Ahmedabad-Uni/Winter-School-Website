import * as React from "react"

import Seo from "../components/seo"
import TeamCard from "../components/teamCard"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import {data} from "../../static/data/team_data.js"


const TeamPage = () => (
  <>
    <Navbar />
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32 text-center">
        <h2 className="mb-12 text-3xl font-bold">
          Meet the Team
        </h2>

        <div className="lg:gap-xl-12 grid gap-x-6 md:grid-cols-3 xl:grid-cols-4">
          {data.Team.map((member) => <TeamCard data={member} />)}

        </div>
      </section>
    </div>
    <Footer/>
  </>
)

export const Head = () => <Seo title="Team" />

export default TeamPage
