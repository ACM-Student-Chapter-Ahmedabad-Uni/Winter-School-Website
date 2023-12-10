import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Seo from "../components/seo"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { inject } from '@vercel/analytics';

const DetailedSchedulePage = () => {
    inject();
    return <>
        <Navbar />
        <section>
            <div className="container px-4 py-16 mx-auto space-y-8 lg:max-w-3xl">
                <h2 className="text-2xl font-bold md:text-4xl text-center">Detailed Schedule</h2>
                <div className="space-y-8">
                    <iframe title="schedule" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRM0yU9FSljgQIi91x0QT2rTI8hufwAGDI6jAZYVEeW84pDymz-FGx-BF_h3uX8BcuXNH2w92AQBnx-/pubhtml" width="100%" height="525" scrolling="no"></iframe>
                </div>
            </div>
        </section>
        <Footer />
    </>
}

export const Head = () => <Seo title="Detailed Schedule" />

export default DetailedSchedulePage
