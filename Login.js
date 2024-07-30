'use client';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/authSlice'; 
import { useRouter } from 'next/navigation'; // Assurez-vous d'importer useRouter correctement
import './Login.css'; 

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  
  const messages = useSelector((state) => state.auth.messages);
  const dispatch = useDispatch();
  const router = useRouter(); // Obtenez l'objet router

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email: formData.email, password: formData.password }));
  };

  useEffect(() => {
    if (messages === 'Connexion réussie !') {
      console.log("Bienvenue");
      router.push('/'); // Redirigez vers la page d'accueil
    }
  }, [messages, router]);

  return (
    <div className="container">
      <div className="form-container">
        <h2 className="title">Connexion</h2>
        <form onSubmit={handleSubmit}>
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
          <button type="submit" className="submit-button">Se connecter</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
