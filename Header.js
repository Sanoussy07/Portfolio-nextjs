import React from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice'; 
import { useRouter } from 'next/navigation';
import './Header.css';

const Header = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    if (confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
      dispatch(logout());
      router.push('/Login'); // Redirigez vers la page de connexion
    }
  };
  

  return (
    <header>
      <nav>
        <h1>Bienvenue sur mon portfolio</h1>
        <ul>
          <li><Link href="/">Accueil</Link></li>
          <li><Link href="/Project">Projets</Link></li>
          <li><Link href="/Contact">Contact</Link></li>
          <li><Link href="/Testimonials">Témoignages</Link></li>
          <li><Link href="/Inscription">Inscription</Link></li>
          <li><Link href="/Login">Login</Link></li>
          <li><button onClick={handleLogout} className="logout-button">Déconnexion</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
