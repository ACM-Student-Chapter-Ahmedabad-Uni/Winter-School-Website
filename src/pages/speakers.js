import * as React from "react"

import Seo from "../components/seo"
import TeamCard from "../components/teamCard"
import Navbar from "../components/navbar"

const data = {
  "Speakers": [
    {
      "name": "Sougata",
      "imageUrl": "data:image/jpeg;base64,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",
      "title": "Title for Sougata"
    },
    {
      "name": "Sitabhra",
      "imageUrl": "https://example.com/sitabhra.jpg",
      "title": "Title for Sitabhra"
    },
    {
      "name": "Santhanam",
      "imageUrl": "https://example.com/santhanam.jpg",
      "title": "Title for Santhanam"
    },
    {
      "name": "Ramasuri",
      "imageUrl": "https://example.com/ramasuri.jpg",
      "title": "Title for Ramasuri"
    },
    {
      "name": "Nitendra",
      "imageUrl": "https://example.com/nitendra.jpg",
      "title": "Title for Nitendra"
    },
    {
      "name": "Sayan",
      "imageUrl": "https://example.com/sayan.jpg",
      "title": "Title for Sayan"
    },
    {
      "name": "Seema",
      "imageUrl": "https://example.com/seema.jpg",
      "title": "Title for Seema"
    }
  ]
}


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

  </>
)

export const Head = () => <Seo title="Speakers" />

export default SpeakerPage
