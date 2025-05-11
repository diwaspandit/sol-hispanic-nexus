
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BusinessStage from '@/components/BusinessStage';
import ChatInterface from '@/components/ChatInterface';
import Dashboard from '@/components/Dashboard';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Add scroll reveal effect
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <BusinessStage />
        <Dashboard />
        <ChatInterface />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
