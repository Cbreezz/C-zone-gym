import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import FacilitiesSection from './components/FacilitiesSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/PodcastSection';
import Home from './pages/Home';
import About from './pages/About';
import Classes from './pages/Classes';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop'; 

const App: React.FC = () => {
    return (
        <Router>
            <ScrollToTop>
                <div>
                    <Navbar />
                    <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/classes" element={<Classes />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/testimonialssection" element={<TestimonialsSection />} />
                        <Route path="/faqsection" element={<FAQSection />} />
                        <Route path="/facilitiessection" element={<FacilitiesSection />} />
                        <Route path="/herosection" element={<HeroSection />} />
                    </Routes>
                    </main>
                    <Footer />
                </div>
            </ScrollToTop>
        </Router>
    );
};

export default App;
