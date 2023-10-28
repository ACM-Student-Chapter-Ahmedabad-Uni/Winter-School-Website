import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="bg-white h-7"></div> {/* White strip */}
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">ACM WiNS</h3>
            <p className="mb-4">
            Network Science has been an active area of research for the last two decades. This school will introduce the students to the field, make them familiar with some of the fundamental results and approaches, and in particular, demonstrate its impact on multiple disciplines including biology, economics and the social sciences.
            </p>
          </div>
          <div className="text-center"> {/* Centered content */}
            <h5 className="text-xl font-bold mb-4">Quick Links</h5>
            <ul className="mb-4">
              <li><a href="/schedule" className="text-gray-400 hover:text-white">SCHEDULE</a></li>
              <li><a href="/speakers" className="text-gray-400 hover:text-white">SPEAKERS</a></li>
              <li><a href="/team" className="text-gray-400 hover:text-white">TEAM</a></li>
              <li><a href="/venue" className="text-gray-400 hover:text-white">VENUE</a></li>
              <li><a href="/resources" className="text-gray-400 hover:text-white">RESOURCES</a></li>
            </ul>
          </div>
          <div className="text-center"> {/* Centered content */}
            <h5 className="text-xl font-bold mb-4">Contact Information</h5>
            <p className="mb-2"><i className="fa fa-phone"></i> +91 9601292334</p>
            <p className="mb-2"><i className="fa fa-envelope"></i> jineet.s@ahduni.edu.in</p>
            <p><i className="fa fa-paper-plane"></i> Address, Ahmedabad, Gujarat.</p>
          </div>
        </div>
      </div>
      {/* <div className="bg-gray-900 py-4 text-center">
        <p className="text-white">Ahmedabad University</p>
      </div> */}
    </footer>
  );
}

export default Footer;
