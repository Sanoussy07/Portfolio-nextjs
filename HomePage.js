import React from 'react';
import './HomePage.css';
import { FaJava, FaJs, FaHtml5, FaCss3Alt, FaDatabase, FaChalkboardTeacher, FaChartLine } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="header">
        <div className="header-content">
          <img src="https://i.pinimg.com/originals/71/b3/bd/71b3bd96477aa44881347e535d5b96b0.jpg" alt="Profil" className="profile-image" />
          <div className="contact-info">
            <p className="name">Nom: Mamadou Sanoussy Barry</p>
            <p>Email: <a href="mailto:barrymamadousanoussy1017@gmail.com">barrymamadousanoussy1017@gmail.com</a></p>
            <p>Téléphone: 514 467 7874</p>
          </div>
        </div>
      </header>

      <section className="about-me">
        <h2>À Propos de Moi</h2>
        <p>Passionné par l'informatique et la résolution de problèmes complexes,
           je suis un développeur web récemment diplômé en développement
            d'applications web et mobiles. J'aime créer des solutions
             innovantes et efficaces qui répondent aux besoins des utilisateurs.</p>
      </section>

      <section className="skills">
        <h2>Compétences</h2>
        <ul>
          <li><FaJava className="skill-icon" /> Langages de Programmation : Java, C#, JavaScript, HTML/CSS</li>
          <li><FaJs className="skill-icon" /> Frameworks et Bibliothèques : React, Angular, Node.js</li>
          <li><FaDatabase className="skill-icon" /> Bases de Données : SQL, Cassandra, MongoDB</li>
          <li><FaHtml5 className="skill-icon" /> Outils de Développement : Git, VS Code, IntelliJ IDEA, NetBeans</li>
          <li>Méthodologies : Agile, Scrum, DevOps</li>
        </ul>
      </section>

      <section className="education">
        <h2>Éducation</h2>
        <p>DEC en Programmation informatique</p>
        <p>Collège Lacité, Août 2024</p>
      </section>

      <section className="certifications">
        <h2>Certifications</h2>
        <ul>
          <li><FaChalkboardTeacher className="cert-icon" /> Certification en Cyber Sécurité, Udemy, 2024</li>
          <li><FaChartLine className="cert-icon" /> Power BI, Udemy, 2024</li>
        </ul>
      </section>

      <section className="languages">
        <h2>Langues</h2>
        <p>Français: Courant</p>
        <p>Anglais: Intermédiaire</p>
      </section>

      <section className="interests">
        <h2>Intérêts</h2>
        <p>Intelligence Artificielle, Conception de
          Cybersecurité, Cryptographie, bases de données, etc.</p>
      </section>
    </div>
  );
};

export default HomePage;
