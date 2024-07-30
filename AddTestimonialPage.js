"use client"; 

import React, { useState } from 'react';
import './AddTestimonialPage.css';

const AddTestimonialPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="add-testimonial-container">
      <h2>Laisser un témoignage</h2>
      {!formSubmitted ? (
        <form onSubmit={handleSubmit}>
          <label>
            Nom:
            <input type="text" name="name" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Note (1-5):
            <input type="number" name="rating" min="1" max="5" required />
          </label>
          <label>
            Message:
            <textarea name="message" required></textarea>
          </label>
          <label>
            <input type="checkbox" name="terms" required />
            J'accepte les termes et conditions
          </label>
          <button type="submit">Envoyer</button>
        </form>
      ) : (
        <div className="confirmation-message">
          <p>Merci pour votre témoignage !</p>
          <p>Nous apprécions vos retours.</p>
        </div>
      )}
    </div>
  );
};

export default AddTestimonialPage;
