import React, { useState, useEffect } from 'react';
import '../styles/carousel.css'; // Import CSS file for custom styles

const images = [
    require('../images/One.jpeg'),
    require('../images/Three.jpg'),
    require('../images/Two.png'),
    // Add as many images as you want...
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
                    <div className="carousel-text bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg absolute top-1/2 right-0 transform -translate-y-1/2 w-1/2 p-6">
                        <div className="carousel-text-content">
                            <h2 className="text-sm sm:text-base md:text-lg lg:text-3xl font-bold mb-4 text-black">ACM Winter School on Network Science 2023</h2>
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black">
                                Network science has been an active area of research for the last two decades. The Winter School will introduce the students to the field, make them familiar with some of the fundamental results and approaches, and, in particular, demonstrate its impact on multiple disciplines, including biology, economics, and the social sciences.
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Carousel;
