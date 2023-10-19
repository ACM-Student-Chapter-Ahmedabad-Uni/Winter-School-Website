import * as React from "react"

import Seo from "../components/seo"
import TeamCard from "../components/teamCard"
import Navbar from "../components/navbar"

const data = {
  "Speakers": [
    {
      "name": "Amit Nanavati",
      "imageUrl": "https://cdn.discordapp.com/attachments/1164468767175233536/1164469844834533386/300_x_400_amit_nanavati-1.png?ex=6543540d&is=6530df0d&hm=acb46162effb7cb04791abbd7782e4875699e7870ecd68331c910df050d33b27&",
      "title": "Founder & CEO"
    },
    {
      "name": "Harsh Bhagat",
      "imageUrl": "https://example.com/harsh.jpg",
      "title": "CTO"
    },
    {
      "name": "Jineet Shah",
      "imageUrl": "https://example.com/jineet.jpg",
      "title": "Lead Developer"
    },
    {
      "name": "Mihir Kotecha",
      "imageUrl": "https://cdn.discordapp.com/attachments/1164468767175233536/1164469108809678848/370222606_1380071009577549_5520256599924713303_n.png?ex=6543535e&is=6530de5e&hm=28041b7de13d417eacba6837f991d6bf2f44137e9e789d7f2db64c8cf865307e&",
      "title": "Marketing Manager"
    },
    {
      "name": "Dhruvi Rajput",
      "imageUrl": "https://example.com/dhruvi.jpg",
      "title": "Designer"
    },
    {
      "name": "Krutarth Vora",
      "imageUrl": "https://example.com/krutarth.jpg",
      "title": "Developer"
    },
    {
      "name": "Parva Parmar",
      "imageUrl": "https://example.com/parva.jpg",
      "title": "Developer"
    },
    {
      "name": "Paridhi Jain",
      "imageUrl": "https://example.com/paridhi.jpg",
      "title": "Developer"
    }
  ]
}




const TeamPage = () => (
  <>
    <Navbar />
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32 text-center">
        <h2 className="mb-12 text-3xl font-bold">
          Meet the Team
        </h2>

        <div className="lg:gap-xl-12 grid gap-x-6 md:grid-cols-3 xl:grid-cols-4">
          {data.Speakers.map((speaker) => <TeamCard name={speaker.name} title={speaker.title} imageUrl={speaker.imageUrl} />)}

        </div>
      </section>
    </div>
  </>
)

export const Head = () => <Seo title="Team" />

export default TeamPage
