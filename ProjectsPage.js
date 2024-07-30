import React from 'react';
import Link from 'next/link';
import './ProjectsPage.css'; // Assurez-vous que le chemin est correct

const ProjectsPage = () => {
  return (
    <div className="projects-container">
      <h2>Mes Projets</h2>
      <div className="project">
        <h3><Link href="/project1">Projet 1</Link></h3>
        <img src="/image/project1-jpg.jpg" alt="Capture d'écran du Projet 1" className="project-image" />
        <p>
          Le Centre d’Accès à la Technologie en Bio-innovation désire mettre sur pied
          un logiciel de gestion des inventaires des plantules de cannabis. Le projet concerne le développement d'une application de gestion d'inventaire
          pour les plantes de cannabis, comprenant une version desktop et une activité web mobile,
          afin de permettre une gestion efficace et précise des données liées à chaque plante.
        </p>
      </div>
      <div className="project">
        <h3><Link href="/project2">Projet 2</Link></h3>
        <img src="/image/project2.jpg" alt="Capture d'écran du Projet 2" className="project-image" />
        <p>
          La compagnie fictive ABC exige que ses employé.e.s suivent des cours de formation continue dans leur domaine d’expertise.
          Un.e employé.e peut donc soumettre des demandes de formation offertes par des tierces parties (ex : Udemy.com). Ces demandes doivent être approuvées par le.a gestionnaire et envoyées à un.e agent.e aux ressources humaines (RH) qui en fera le suivi. 
          Le processus de traitement des demandes de formation s’effectue actuellement à l’aide d’un formulaire PDF, qui est acheminé au gestionnaire et aux RH par courriel.
        </p>
      </div>
    </div>
  );
};

// Utiliser withAuth pour protéger la page des projets
export default ProjectsPage;
