import React from 'react'
import './footer-style.css';
const Footer = () => {
    return (
        <>
            <div className="Footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 col-12 ft-1">
                            <h3><span>ACM</span>WiNS</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ea quo ex ullam laboriosam magni totam, facere eos iure voluptate.</p>
                            <div className="footer-icons">
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-linkedin-in"></i>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h5>Quick Links</h5>
                            <ul>
                                <li className="nav-item">
                                    <a className="" href="/">HOME</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">ABOUT</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">EVENTS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">TEAM</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">RESOURCESC</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12 ft-3">
                            <h5>Quick Links</h5>
                            <p><i class="fa-solid fa-phone-volume"></i> +92 8697481150</p>
                            <p><i class="fa-solid fa-envelope"></i> paridhi.j@ahduni.edu.in</p>
                            <p><i class="fa-solid fa-paper-plane"></i> Ahmedabad, Gujarat.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Last-footer'>
                <p>Ahmedabad University</p>
            </div>
        </>
    )
}

export default Footer