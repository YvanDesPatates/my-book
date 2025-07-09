import commonStyle from './ressources/css/common.css'

import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './views/Home';
import DomaineCompetency from './views/DomaineCompetency';
import Header from './composants/Header';
import Footer from './composants/Footer';
import CarouselModal from './composants/CarouselModal';
import React, { useState, useEffect } from 'react';

import { useScrollToTop } from './composants/UtilFunctions';
function ScrollToTop() {
    useScrollToTop();
    return null;
}

// used to open the carousel modal from anywhere in the app
export class CarouselModalManager {
    static open;
}

export default function App() {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalImages, setModalImages] = useState([]);

    useEffect(() => {
        CarouselModalManager.open = (images) => {
            setModalImages(images);
            setModalOpen(true);
        };
    }, []);

    return (
        <Router>
            <ScrollToTop/>
            <CarouselModal
                images={modalImages}
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
            />
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