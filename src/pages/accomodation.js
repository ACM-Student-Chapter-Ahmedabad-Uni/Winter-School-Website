import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Layout from "../components/layout"
import Seo from "../components/seo"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

const AccommodationPage = () => (
  <Layout>
    <Navbar />
    <div>
      <h1>Accommodation Details</h1>
      
      <h2>Hostel Information</h2>
      <p>
        All students attending Ahmedabad University are required to stay in the university's designated hostels. This ensures a conducive living and learning environment for all.
      </p>

      <h3>Hostel Facilities:</h3>
      <ul>
        <li>Spacious and well-furnished rooms</li>
        <li>24/7 security and surveillance</li>
        <li>Common areas for socializing and studying</li>
        <li>Laundry facilities</li>
        <li>High-speed Wi-Fi</li>
        <li>Cafeteria serving nutritious meals</li>
      </ul>

      <h3>Check-In/Check-Out:</h3>
      <p>
        Check-in time: 12:00 PM<br />
        Check-out time: 10:00 AM
      </p>

      <h2>Transportation</h2>

      <h3>From Airport to Hostel</h3>

      <h4>Option 1: Pre-arranged Transportation</h4>
      <p>
        For your convenience, Ahmedabad University offers pre-arranged transportation from Sardar Vallabhbhai Patel International Airport to the hostel. To avail this service, please inform the university at least 72 hours prior to your arrival.
      </p>

      <h4>Option 2: Taxi Services</h4>
      <p>
        Taxis are readily available at the airport. We recommend using reputable services for a hassle-free experience. Estimated travel time from the airport to the hostel is approximately 30 minutes, depending on traffic conditions.
      </p>

      {/* Add similar sections for transportation from Railway Station to Hostel and from Hostel to University */}
    </div>
    <Footer />
  </Layout>
)

export const Head = () => <Seo title="Accommodation" />

export default AccommodationPage
