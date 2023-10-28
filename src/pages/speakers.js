import * as React from "react"
import Seo from "../components/seo"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { data } from "../../static/data/speakers_data.js"

const SpeakerPage = () => (
  <>
    <Navbar />
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32 text-center">
        <h2 className="mb-12 text-3xl font-bold text-left">
          Speakers
        </h2>

        <div className="grid gap-y-6">
          {data.Speakers.map((speaker, index) => (
            <div id={speaker.name} key={index} className="bg-white shadow-lg rounded-lg mx-6 md:flex items-center">
              <img className="w-full h-90 object-cover rounded-t-lg md:w-1/3 md:h-auto md:rounded-l-none" src={speaker.imageUrl} alt={speaker.name} />
              <div className="p-6 md:w-2/3">
                <div className="flex flex-col h-full justify-center">
                  <h4 className="mb-3 text-xl font-semibold tracking-tight text-left">{speaker.name}</h4>
                  <p className="leading-normal text-left">{speaker.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
    <Footer />
  </>
)

export const Head = () => <Seo title="Speakers" />

export default SpeakerPage
