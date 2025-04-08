import React from 'react';
import HeroSection from '../components/HeroSection';
import FacilitiesSection from '../components/FacilitiesSection';
import VibeSection from "../components/VibeSection";
import TestimonialsSection from '../components/TestimonialsSection';
import PodcastSection from '../components/PodcastSection';

const Home: React.FC = () => {
    return (
        <div>
            <HeroSection />
            <FacilitiesSection />
            <VibeSection />
            <TestimonialsSection />
            <PodcastSection />
        </div>
    );
};

export default Home;
