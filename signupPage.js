'use client';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../redux/authSlice';
import './SignupPage.css'; 

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [message, setMessage] = useState(''); 
  const [isError, setIsError] = useState(false); 

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setMessage("Les mots de passe ne correspondent pas !");
      setIsError(true);
      return;
    }

    // Dispatch de l'action signup avec les données du formulaire
    dispatch(signup({ name: formData.name, email: formData.email, password: formData.password }));

    // Mise à jour du message de validation
    setMessage("Inscription réussie ! Vous pouvez maintenant vous connecter.");
    setIsError(false);

    // Réinitialisation du formulaire
    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2 className="title">Inscription</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nom complet"
            value={formData.name}
            onChange={handleChange}
            required
            className="input-field"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input-field"
          />
          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            value={formData.password}
            onChange={handleChange}
            required
            className="input-field"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirmer le mot de passe"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="input-field"
          />
          <button type="submit" className="submit-button">S'inscrire</button>
        </form>
        {message && (
          <p className={isError ? "error-message" : "success-message"}>{message}</p>
        )}
      </div>
    </div>
  );
};

export default SignupPage;
