'use client'
import React, { useEffect } from 'react';
import { useRouter } from 'next/router'; 
import { useSelector } from 'react-redux';
import ProjectsPage from './ProjectsPage';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated) {
        router.push('/Login');  
      }
    }, [isAuthenticated, router]);

    if (!isAuthenticated) {
      return null; 
    }

    return <ProjectsPage {...props} />;
  };
};

export default withAuth;
