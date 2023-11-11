import React from 'react';

function FooterCard({ title, content }) {
  return (
    <div className="bg- p-6 shadow-lg rounded-lg mb-8">
      <h5 className="text-xl font-bold mb-4">{title}</h5>
      <p>{content}</p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="bg-white h-7"></div> {/* White strip */}
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FooterCard
            title="ACM Winter School"
            content="Network science has been an active area of research for the last two decades. The Winter School will introduce the students to the field, make them familiar with some of the fundamental results and approaches, and, in particular, demonstrate its impact on multiple disciplines, including biology, economics, and the social sciences."
          />

          <FooterCard
            title="Quick Links"
            content={
              <ul className="list-disc">
                <li><a href="/schedule" className="text-gray-400 hover:text-white">SCHEDULE</a></li>
                <li><a href="/speakers" className="text-gray-400 hover:text-white">SPEAKERS</a></li>
                <li><a href="/team" className="text-gray-400 hover:text-white">TEAM</a></li>
                <li><a href="/venue" className="text-gray-400 hover:text-white">VENUE</a></li>
                <li><a href="/resources" className="text-gray-400 hover:text-white">RESOURCES</a></li>
              </ul>
            }
          />

          <FooterCard
            title="Contact Information"
            content={
              <>
                <p><i className="fa fa-envelope"></i>Yatri Mehta</p>
                <p><i className="fa fa-phone"></i> +91 9974093646</p>
                <p><i className="fa fa-envelope"></i> yatri.mehta@ahduni.edu.in</p>
              </>
            }
          />
        </div>
      </div>
      {/* <div className="bg-gray-900 py-4 text-center">
        <p className="text-white">Ahmedabad University</p>
      </div> */}
    </footer>
  );
}

export default Footer;
