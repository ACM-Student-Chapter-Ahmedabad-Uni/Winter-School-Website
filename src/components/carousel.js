import React, { useState, useEffect } from 'react';

const images = [
    require('../images/One.jpg'),
    require('../images/Three.jpg'),
    require('../images/Two.jpg'),
    // Add as many images as you want...
];

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Automatically move to next image after 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((activeIndex + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [activeIndex]);

    return (
        <div style={{ height: '70vh' }}>
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image.default}
                    alt=""
                    style={{
                        display: index === activeIndex ? 'block' : 'none',
                        // objectFit: 'contain',
                        width: '100%',
                        height: '100%',
                    }}

                />
                

            ))}
        </div>
    );
};

export default Carousel;
