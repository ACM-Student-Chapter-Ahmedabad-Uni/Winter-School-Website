import React, { useState, useEffect } from 'react';
import '../styles/carousel.css'; // Import CSS file for custom styles

const images = [
    require('../images/Gate without ladder Vishal Ahmedabad University Panorama.jpg'),
    
];

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((activeIndex + 1) % images.length);
        }, 10000);
        return () => clearInterval(interval);
    }, [activeIndex]);

    return (
        <div className="carousel-container">
            {images.map((image, index) => (
                <div key={index} className={`carousel-slide ${index === activeIndex ? 'active' : ''}`}>
                    <img
                        src={image.default}
                        alt=""
                        className="carousel-image"
                    />
                    <div className="carousel-text-container">
                        <div className="carousel-text bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg absolute top-1/2 right-0 transform -translate-y-1/2 w-1/2 p-6 z-10">
                            <div className="carousel-text-content text-center overflow-y-auto max-h-60">
                                <h2 className="text-sm sm:text-base md:text-lg lg:text-3xl font-bold mb-4 text-black">Winter School on Network Science 2023</h2>
                                <h2 className="text-sm sm:text-base md:text-lg lg:text-2xl font-bold text-black">Association for Computing Machinery's (ACM)</h2>
                                <h2 className="text-sm sm:text-base md:text-lg lg:text-2xl font-bold mb-4 text-black">Student Chapter</h2>
                                <h2 className="text-sm sm:text-base md:text-lg lg:text-2xl  text-black">School of Engineering and Applied Science</h2>
                                <h2 className="text-sm sm:text-base md:text-lg lg:text-2xl  text-black">Ahmedabad University</h2>
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black">
                                
                                </p>
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black">
                                    Network science has been an active area of research for the last two decades. The Winter School will introduce the students to the field, make them familiar with some of the fundamental results and approaches, and, in particular, demonstrate its impact on multiple disciplines, including biology, economics, and the social sciences.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Carousel;
