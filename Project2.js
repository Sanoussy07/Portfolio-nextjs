import React from 'react';
import { FaReact, FaJsSquare, FaSass, FaBootstrap } from 'react-icons/fa'; 
import './Project2.css';

const Project2 = () => {
  return (
    <div className="project2-container">
      <h3>Projet 2</h3>
      <h4>Conception d'une Application Web pour les Demandes de Formation</h4>
      <img src="/image/project2.jpg" alt="Capture d'écran du Projet 2" className="project2-image" />
      <p className="description">La compagnie fictive ABC a lancé un projet visant à digitaliser le processus de demande de formation pour ses employés. L'objectif principal est de créer une plateforme centralisée où les employés peuvent soumettre leurs demandes de formation, qui seront ensuite validées par les gestionnaires et les ressources humaines.</p>
      <p className="description">Fonctionnalités principales :
        <ul>
          <li>Formulaire en ligne pour soumettre des demandes de formation avec des pièces jointes.</li>
          <li>Flux de travail automatisé pour l'approbation des demandes par les gestionnaires et les RH.</li>
          <li>Tableau de bord pour le suivi des demandes, incluant l'historique et le statut des formations.</li>
          <li>Système de notifications pour informer les parties prenantes des nouvelles demandes ou des changements de statut.</li>
          <li>Intégration avec des plateformes de formation tierces (ex : Udemy) pour l'inscription automatique aux cours.</li>
        </ul>
      </p>
      <p className="description">Défis techniques :
        <ul>
          <li>Conception d'une interface utilisateur accessible et responsive, adaptée à une variété d'appareils.</li>
          <li>Mise en œuvre d'un système de gestion des utilisateurs avec des rôles et des permissions spécifiques.</li>
          <li>Assurance de la sécurité des données sensibles des employés et des informations des formations.</li>
        </ul>
      </p>
      <p className="tech-section">Technologies utilisées :</p>
      <ul className="tech-list">
        <li><FaReact /> React pour l'interface utilisateur</li>
        <li><FaJsSquare /> JavaScript pour le développement front-end</li>
        <li>Node.js pour le back-end</li>
        <li><FaSass /> Sass pour le styling</li>
        <li><FaBootstrap /> Bootstrap pour les composants réactifs</li>
        <li>Outils de développement : Webpack, Babel, VS Code</li>
      </ul>
    </div>
  );
};

export default Project2;
