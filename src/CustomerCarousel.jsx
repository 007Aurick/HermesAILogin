import React from 'react';
import './CustomerCarousel.css';

const CUSTOMERS = [
  'Thompson Hine',
  'Merck',
  'Comcast',
  'Dentons',
  'BakerHostetler',
  'P&G',
  'Herbert Smith Freehills',
  'Hengeler Mueller',
  'McCarthy Tétrault',
  'Blake Cassels',
  'Osler',
  'Torys',
];

const CustomerCarousel = () => {
  const logos = [...CUSTOMERS, ...CUSTOMERS];

  return (
    <section className="customer-carousel" aria-label="Our customers">
      <div className="customer-carousel__viewport">
        <div className="customer-carousel__track">
          {logos.map((name, index) => (
            <span
              key={`${name}-${index}`}
              className="customer-carousel__logo"
              aria-hidden={index >= CUSTOMERS.length}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
      <div className="customer-carousel__label">Our Customers</div>
    </section>
  );
};

export default CustomerCarousel;
