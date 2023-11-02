import * as React from "react"

import Seo from "../components/seo"
import TeamCard from "../components/teamCard"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { data } from "../../static/data/team_data.js"


const TeamPage = () => (
  <>
    <Navbar />
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
        </p>
      </div>
      <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
        
          {data.Team.map((member) => <TeamCard data={member} />)}
          </div>
    </div>
    <Footer />
  </>
)

export const Head = () => <Seo title="Team" />

export default TeamPage
