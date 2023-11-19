import React from "react";
import Seo from "../components/seo";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { inject } from '@vercel/analytics';

const Card = ({ title, content }) => (
  <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mb-8">
    <h4 className="mb-2 text-xl font-semibold">{title}</h4>
    <p className="text-gray-700">{content}</p>
  </div>
);

const AhmedabadVenuePage = () => (
  <>
    inject();
    <Navbar />
    <div className="container mx-auto my-24 md:px-6 ">
      <Card
        title="Welcome to Ahmedabad!"
        content="Located in the heart of Gujarat, Ahmedabad is defined by a spirit of enterprise, and houses several reputed educational institutions and heritage sites. Associated with Mahatma Gandhi and his Ashram in Sabarmati, Ahmedabad is also home to some of the finest medieval and modern architecture in the country. Complete with modern amenities like malls and multiplexes, and superior public infrastructure, Named as India's first heritage city by UNESCO, it offers plenty to explore between a rich heritage, abundant museums, colourful festivals, and a mélange of cultural activities. Ahmedabad is also an industrial town with a rich history of textiles, pharmaceutical, chemicals, auto and auto components, and engineering industries."
      />

      <Card
        title="Getting Around"
        content={
          <>
            <p>Auto Rickshaws: Available throughout the city, metered auto rickshaws are a favourite mode of transport for residents.</p>
            <p>Local Buses: Run by the Ahmedabad Municipal Transport Services (AMTS), buses are the most common means of public transport in the city. Two University bus stops are located within walking distance of the Campus that connects to most of Ahmedabad. Also, across the road from the administration building is the Bus Rapid Transport System (BRTS) corridor, a bus service that runs in dedicated lanes in the middle of the road, saving time on long distance commutes.</p>
            <p>Ahmedabad Metro: The Ahmedabad Metro is a convenient mode of transportation in the city, offering a fast and efficient way to travel. The metro system connects various parts of Ahmedabad, making it easier for residents and visitors to get around. Commerce Six Roads is the nearest metro station from the campus. Be sure to check the metro's schedule and routes for a hassle-free commuting experience.</p>
          </>
        }
      />

      <Card
        title="Distance to Ahmedabad University"
        content={
          <>
            From Ahmedabad Railway Station (Kalupur) - 7.9 km
            <br />
            From Ahmedabad Bus Station (Gita Mandir) - 6.7 km
            <br />
            From Ahmedabad Airport - 11.8 km
            <br />
            <a href="https://www.uber.com/global/en/cities/ahmedabad/" target="_blank" rel="noopener noreferrer">Book an Uber</a>
          </>
        }
      />



      <div className="flex justify-center my-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.620808478187!2d72.55176541103224!3d23.037691015676568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848d5f86040f%3A0x7a0cc8b624851642!2sAhmedabad%20University!5e0!3m2!1sen!2sin!4v1699127131262!5m2!1sen!2sin"
          width="700"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map of Ahmedabad University Location"
        ></iframe>
      </div>
    </div>
    <Footer />
  </>
);

export const Head = () => <Seo title="Ahmedabad Venue" />

export default AhmedabadVenuePage;
