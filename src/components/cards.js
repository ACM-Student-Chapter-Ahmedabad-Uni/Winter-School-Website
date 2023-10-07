import React from 'react';
import cardImage from '../images/Card-dummy.jpeg';

function Cards() {
  return (
    <div className="card">
      <div className="row no-gutters">
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Card Title</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl ac ultrices aliquet, nunc nunc tincidunt nunc, id lacinia nunc nunc nec nunc. Sed id nunc auctor, aliquam nunc id, aliquam nunc. Sed id nunc auctor, aliquam nunc id, aliquam nunc.</p>
            <a href="#" className="btn btn-primary">Read More</a>
          </div>
        </div>
        <div className="col-md-4">
          <img src={cardImage} className="card-img" alt="Image" />
        </div>
      </div>
    </div>
  );
}

export default Cards;
