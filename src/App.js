import commonStyle from './ressources/css/common.css'

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './views/Home';
import DomaineCompetency from './views/DomaineCompetency';
import Header from './composants/Header';
import Footer from './composants/Footer';
import ScrollToTop from "./composants/ScrollToTop";

export default function App() {

  return (
      <Router>
          <ScrollToTop/>
          <div className='min-h-screen hero-gradient'>
              <Header/>
              <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path="/domaine_de_competence/:domaineKey" element={<DomaineCompetency/>}/>
                  <Route path='*' element={<Navigate to="/"/>}/>
              </Routes>
              <Footer/>
          </div>
      </Router>
  );
}