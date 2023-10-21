import * as React from "react"

import Seo from "../components/seo"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import {data} from "../../static/data/speakers_data.js"

const SpeakerPage = () => (
  <>
    <Navbar />
    <div className="container my-24 mx-auto md:px-6">
  <section className="mb-32 text-center">
    <h2 className="mb-12 text-3xl font-bold">
      Speakers
    </h2>

    <div className="grid gap-y-6">
      {data.Speakers.map((speaker) => (
        <div className="flex items-center bg-white shadow-lg rounded-lg mx-6">
          <img className="w-1/4 h-29 object-cover rounded-l-lg" src={speaker.imageUrl} alt={speaker.name} />
          <div className="px-6 py-4">
            <h4 className="mb-3 text-xl font-semibold tracking-tight">{speaker.name}</h4>
            <p className="leading-normal">{speaker.title}</p>
          </div>
        </div>
      ))}
    </div>
  </section>

</div>
  <Footer/>
  </>
)

export const Head = () => <Seo title="Speakers" />

export default SpeakerPage
