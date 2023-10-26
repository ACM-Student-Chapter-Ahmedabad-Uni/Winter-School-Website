import React from "react";
import Seo from "../components/seo";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const AhmedabadVenuePage = () => (
  <>
    <Navbar />
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-16 text-center">
        <h2 className="mb-6 text-3xl font-bold text-left">
          Welcome to Ahmedabad!
        </h2>
        <p className="text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel
          arcu in neque tristique blandit.
        </p>
      </section>

      <section className="mb-16">
        <h3 className="mb-4 text-2xl font-semibold text-left">About Ahmedabad</h3>
        <p className="text-left">
          Ahmedabad, the largest city in the state of Gujarat, is known for its
          rich cultural heritage, historical landmarks, and vibrant
          atmosphere. It is a perfect blend of traditional charm and modern
          development.
        </p>
        {/* Add more information about Ahmedabad */}
      </section>

      <section className="mb-16">
        <h3 className="mb-4 text-2xl font-semibold text-left">Conference Venue</h3>
        <p className="text-left">
          The conference will be hosted at the prestigious Ahmedabad University,
          located in the heart of the city. The venue provides state-of-the-art
          facilities and an inspiring environment for academic discussions and
          networking.
        </p>
        {/* Add more information about the venue */}
      </section>


      <section className="mb-16">
        <h3 className="mb-4 text-2xl font-semibold text-left">Getting Around</h3>
        <p className="text-left">
          Ahmedabad has a well-connected public transportation system,
          including buses, auto-rickshaws, and cabs. Additionally, the city
          offers a range of options for exploring its attractions.
        </p>
        {/* Add tips for getting around the city */}
      </section>
    </div>
    <Footer />
  </>
);

export const Head = () => <Seo title="Ahmedabad Venue" />;

export default AhmedabadVenuePage;
