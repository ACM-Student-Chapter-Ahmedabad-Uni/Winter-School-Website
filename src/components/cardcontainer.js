import React from 'react';
import cardImage1 from '../images/Card-dummy.jpeg';
import cardImage2 from '../images/Card-dummy.jpeg';

import './cardcontainer.css';
function CardContainer() {
  const cards = [
    {
      title: 'Card 1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl ac ultrices aliquet, nunc nunc tincidunt nunc, id lacinia nunc nunc nec nunc. Sed id nunc auctor, aliquam nunc id, aliquam nunc. Sed id nunc auctor, aliquam nunc id, aliquam nunc.',
      image: cardImage1,
    },
    {
      title: 'Card 2',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl ac ultrices aliquet, nunc nunc tincidunt nunc, id lacinia nunc nunc nec nunc. Sed id nunc auctor, aliquam nunc id, aliquam nunc. Sed id nunc auctor, aliquam nunc id, aliquam nunc.',
      image: cardImage2,
    },
    {
        title: 'Card 3',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl ac ultrices aliquet, nunc nunc tincidunt nunc, id lacinia nunc nunc nec nunc. Sed id nunc auctor, aliquam nunc id, aliquam nunc. Sed id nunc auctor, aliquam nunc id, aliquam nunc.',
        image: cardImage2,
      },
    // Add more cards as needed...
  ];

  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <div className={`card ${index % 2 === 0 ? 'card-left' : 'card-right'}`} key={index}>
          <div className="row no-gutters">
            <div className={`col-md-6 ${index % 2 === 0 ? 'order-md-1' : 'order-md-2'}`}>
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
                <a href="#" className="btn btn-primary">Read More</a>
              </div>
            </div>
            <div className={`col-md-6 ${index % 2 === 0 ? 'order-md-2' : 'order-md-1'}`}>
              <img src={card.image} className="card-img" alt="Image" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardContainer;
