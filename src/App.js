import commonStyle from './ressources/css/common.css'

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import ReactGA from 'react-ga4';
import Home from './views/Home';
import DomaineCompetency from './views/DomaineCompetency';
import Header from './composants/Header';
import Footer from './composants/Footer';
import ScrollToTop from "./composants/ScrollToTop";

// Initialisez votre ID de mesure GA4
ReactGA.initialize('G-F61DD3NBNP');

// Component pour le suivi des vues de page
function RouteChangeTracker() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);

  return null;
}
export default function App() {

  return (
      <Router>
          <RouteChangeTracker/>
          <ScrollToTop/>
          <Header/>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path="/domaine_de_competence/:domaineKey" element={<DomaineCompetency/>}/>
              <Route path='*' element={<Navigate to="/"/>}/>
          </Routes>
          <Footer/>
      </Router>
  );
}