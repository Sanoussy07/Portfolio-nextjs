import React from 'react';
import Link from "next/link";
import './testimoniale.css';





const TestimonialsPage = () => {
  return (
    <div className="testimonials-container">

      <h2>Témoignages</h2>
      <p>Aucun témoignage pour l'instant.</p>
      <Link href="/AddTestimonials">Laisser un témoignage</Link>
    </div>
  );
};

export default TestimonialsPage;
