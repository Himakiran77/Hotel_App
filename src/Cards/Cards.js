import React from 'react';
import './Cards.css';

const Cards = ({ image, title, description }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-body">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Cards;
