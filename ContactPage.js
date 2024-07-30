"use client"; // Marque ce fichier comme un Client Component

import React, { useState } from 'react';
import './ContactPage.css'; // Assurez-vous que ce fichier existe et ne contient pas d'erreurs critiques
import withAuth from './withAuth';
const ContactPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    console.log("Form submitted"); // Log pour vérifier que la soumission du formulaire fonctionne
  };

  return (
    <withAuth>
    <div className="contact-container">
      <h2>Contactez-moi</h2>
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
            Téléphone:
            <input type="tel" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" />
          </label>
          <label>
            Objet:
            <input type="text" name="subject" required />
          </label>
          <label>
            Type de demande:
            <select name="requestType" required>
              <option value="">Sélectionner</option>
              <option value="question">Question</option>
              <option value="feedback">Feedback</option>
              <option value="support">Support</option>
            </select>
          </label>
          <label>
            Message:
            <textarea name="message" required></textarea>
          </label>
          <button type="submit">Envoyer</button>
        </form>
      ) : (
        <div className="confirmation-message">
          <p>Merci de m'avoir contacté. Je vous répondrai dans les meilleurs délais.</p>
        </div>
      )}
    </div>
    </withAuth>
  );
};

export default ContactPage;
