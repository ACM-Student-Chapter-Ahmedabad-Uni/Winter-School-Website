import React from "react";
import Seo from "../components/seo";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const AhmedabadVenuePage = () => (
  <>
    <Navbar />
    <div className="container mx-auto my-24 md:px-6 text-left">
      <section className="mb-16">
        <h2 className="mb-6 text-3xl font-bold">
          Welcome to Ahmedabad!
        </h2>
        <p>
          Located in the heart of Gujarat, Ahmedabad is defined by a spirit of enterprise, 
          and houses several reputed educational institutions and heritage sites. Associated with 
          Mahatma Gandhi and his Ashram in Sabarmati, Ahmedabad is also home to some of the finest 
          medieval and modern architecture in the country. Complete with modern amenities like malls 
          and multiplexes, and superior public infrastructure, Named as India's first heritage city by 
          UNESCO, it offers plenty to explore between a rich heritage, abundant museums, colourful 
          festivals, and a mélange of cultural activities. Ahmedabad is also an industrial town with a 
          rich history of textiles, pharmaceutical, chemicals, auto and auto components, and engineering industries.
        </p>
      </section>

      <section className="mb-16">
        <h3 className="mb-4 text-xl font-semibold">Getting Around</h3>
        
        <div className="mb-4">
          <h4 className="mb-2 text-lg font-semibold underline cursor-pointer">Auto Rickshaws</h4>
          <p className="text-gray-700">
            Available throughout the city, metered auto rickshaws are a favourite mode of transport for 
            residents.
          </p>
        </div>

        <div className="mb-4">
          <h4 className="mb-2 text-lg font-semibold underline cursor-pointer">Local Buses</h4>
          <p className="text-gray-700">
            Run by the Ahmedabad Municipal Transport Services (AMTS), buses are the most common means of 
            public transport in the city. Two University bus stops are located within walking distance of 
            the Campus that connects to most of Ahmedabad. Also, across the road from the administration 
            building is the Bus Rapid Transport System (BRTS) corridor, a bus service that runs in 
            dedicated lanes in the middle of the road, saving time on long distance commutes.
          </p>
        </div>

        <div className="mb-4">
          <h4 className="mb-2 text-lg font-semibold underline cursor-pointer">Ahmedabad Metro</h4>
          <p className="text-gray-700">
            The Ahmedabad Metro is a convenient mode of transportation in the city, offering a fast and 
            efficient way to travel. The metro system connects various parts of Ahmedabad, 
            making it easier for residents and visitors to get around. Commerce Six Roads is the nearest 
            metro station from the campus. Be sure to check the metro's schedule and routes for a 
            hassle-free commuting experience.
          </p>
        </div>

        <div>
          <h4 className="mb-2 text-lg font-semibold">Distance to Ahmedabad University</h4>
          <p className="text-gray-700">From Ahmedabad Railway Station (Kalupur) - 7 km</p>
          <p className="text-gray-700">From Ahmedabad Bus Station (Gita Mandir) - 7 km</p>
          <p className="text-gray-700">From Ahmedabad Airport - 11 km</p>
        </div>
      </section>
    </div>
    <Footer />
  </>
);

export const Head = () => <Seo title="Ahmedabad Venue" />;

export default AhmedabadVenuePage;
