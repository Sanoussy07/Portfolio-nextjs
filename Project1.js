import React from 'react';
import { FaDesktop, FaDatabase } from 'react-icons/fa';
import './Project1.css';

const Project1 = () => {
  return (
    <div className="project1-container">
      <h3>Projet 1</h3>
      <h4>Développement d'une Application de Gestion d'Inventaire des Plantes de Cannabis</h4>
      <img src="/image/project1-jpg.jpg" alt="Capture d'écran du Projet 1" className="project1-image" />
      <p className="description">Le Centre d’Accès à la Technologie en Bio-innovation a sollicité la création d'un logiciel spécialisé pour gérer les inventaires des plantules de cannabis. Cette application vise à centraliser et simplifier la gestion des stocks, incluant la traçabilité des lots, le suivi de la croissance des plantes, et la gestion des cultures.</p>
      
      <div className="section">
        <h5 className="section-title">Fonctionnalités principales :</h5>
        <ul className="section-list">
          <li>Suivi en temps réel des niveaux de stock et des mouvements d'inventaire.</li>
          <li>Interface utilisateur intuitive permettant d'ajouter, modifier ou supprimer des entrées d'inventaire.</li>
          <li>Rapports et statistiques sur les rendements des cultures et les cycles de croissance.</li>
          <li>Intégration de notifications pour les seuils de réapprovisionnement et les dates de récolte.</li>
          <li>Support pour les appareils mobiles afin de faciliter les mises à jour sur le terrain.</li>
        </ul>
      </div>

      <div className="section">
        <h5 className="section-title">Défis techniques :</h5>
        <ul className="section-list">
          <li>Assurer la sécurité et la conformité aux réglementations locales en matière de traçabilité des plantes de cannabis.</li>
          <li>Optimisation de la performance pour gérer de grandes quantités de données en temps réel.</li>
          <li>Implémentation de fonctionnalités offline pour les zones à faible connectivité.</li>
        </ul>
      </div>

      <p className="tech-section">Technologies utilisées :</p>
      <ul className="tech-list">
        <li><FaDesktop className="icon" /> C# pour l'application desktop</li>
        <li><FaDatabase className="icon" /> SQL pour la gestion de la base de données</li>
        <li>WPF pour l'interface utilisateur desktop</li>
        <li>ASP.NET pour les services web</li>
        <li>Outils de développement : Visual Studio, SQL Server Management Studio</li>
      </ul>
    </div>
  );
};

export default Project1;
