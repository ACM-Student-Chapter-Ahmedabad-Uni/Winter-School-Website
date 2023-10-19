import React from 'react'
import './footer-style.css';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
// const Footer = () => {
//     return (
//         <>
//             <div className="Footer">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-md-6 col-lg-5 col-12 ft-1">
//                             <h3><span>ACM</span>WiNS</h3>
//                             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ea quo ex ullam laboriosam magni totam, facere eos iure voluptate.</p>
//                             <div className="footer-icons">
//                                 <i class="fa-brands fa-facebook"></i>
//                                 <i class="fa-brands fa-twitter"></i>
//                                 <i class="fa-brands fa-instagram"></i>
//                                 <i class="fa-brands fa-linkedin-in"></i>
//                             </div>
//                         </div>
//                         <div className="col-md-6 col-lg-3 col-12 ft-2">
//                             <h5>Quick Links</h5>
//                             <ul>
//                                 <li className="nav-item">
//                                     <a className="" href="/">HOME</a>
//                                 </li>
//                                 <li className="nav-item">
//                                     <a className="" href="/">ABOUT</a>
//                                 </li>
//                                 <li className="nav-item">
//                                     <a className="" href="/">EVENTS</a>
//                                 </li>
//                                 <li className="nav-item">
//                                     <a className="" href="/">TEAM</a>
//                                 </li>
//                                 <li className="nav-item">
//                                     <a className="" href="/">RESOURCESC</a>
//                                 </li>
//                             </ul>
//                         </div>
//                         <div className="col-md-6 col-lg-4 col-12 ft-3">
//                             <h5>Quick Links</h5>
//                             <p><i class="fa-solid fa-phone-volume"></i> +92 8697481150</p>
//                             <p><i class="fa-solid fa-envelope"></i> paridhi.j@ahduni.edu.in</p>
//                             <p><i class="fa-solid fa-paper-plane"></i> Ahmedabad, Gujarat.</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className='Last-footer'>
//                 <p>Ahmedabad University</p>
//             </div>
//         </>
//     )
// }

// export default Footer

function Footer() {
    return (
      <container>
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>Sagar<span>Developer</span></h3>
          <p className="footer-links">
            <a href="#">Home</a> | <a href="#">About</a> | <a href="#">Contact</a> | <a href="#">Blog</a>
          </p>
          <p className="footer-company-name">
            Copyright © 2021 <strong>SagarDeveloper</strong> All rights reserved
          </p>
        </div>
        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p><span>Ghaziabad</span> Delhi</p>
          </div>
          <div>
            <i className="fa fa-phone"></i>
            <p>+91 74*9*258</p>
          </div>
          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="mailto:sagar00001.co@gmail.com">xyz@gmail.com</a>
            </p>
          </div>
        </div>
        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the company</span>
            <strong>Sagar Developer</strong> is a Youtube channel where you can find more creative CSS Animations and Effects along with HTML, JavaScript, and Projects using C/C++.
          </p>
          <div className="footer-icons">
            <a href="#"><i className="fa fa-facebook"></i></a>
            <a href="#"><i className="fa fa-instagram"></i></a>
            <a href="#"><i className="fa fa-linkedin"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-youtube"></i></a>
          </div>
        </div>
      </footer>
      </container>
    );
  }
  
  export default Footer;
