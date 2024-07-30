import React from 'react';
import ContactPage from '@/Component/ContactPage';
import withAuth from '@/Component/withAuth'; 

const Contact = () => {
  return (
    <withAuth>
    <ContactPage />
    </withAuth>
  );
};

export default Contact;
