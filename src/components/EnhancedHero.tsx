
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ThreeScene } from '@/lib/three-scene';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EnhancedHero = () => {
  const threeContainerRef = useRef<HTMLDivElement>(null);
  const threeSceneRef = useRef<ThreeScene | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (threeContainerRef.current && !threeSceneRef.current) {
      // Initialize Three.js scene
      threeSceneRef.current = new ThreeScene(threeContainerRef.current);

      // Cleanup on unmount
      return () => {
        if (threeSceneRef.current) {
          threeSceneRef.current.destroy();
          threeSceneRef.current = null;
        }
      };
    }
  }, []);

  const handleGetStarted = () => {
    navigate('/dashboard');
  };

  const handleLearnMore = () => {
    const businessSection = document.getElementById('business-stage');
    if (businessSection) {
      businessSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Three.js container */}
      <div 
        ref={threeContainerRef} 
        className="three-canvas"
        aria-hidden="true"
      />
      
      {/* Hero gradient overlay */}
      <div 
        className="absolute inset-0 gradient-bg opacity-80 -z-10"
        aria-hidden="true"
      />
      
      {/* Hero content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="animate-fade-in font-bold mb-6">
            Empower Your Hispanic Business Journey
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 animate-fade-in opacity-90" style={{ animationDelay: '0.2s' }}>
            Personalized AI guidance to help Hispanic entrepreneurs succeed at every stage of their business journey
          </p>
          
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            style={{ animationDelay: '0.4s' }}
          >
            <Button 
              size="lg" 
              className="bg-terracotta hover:bg-terracotta/80 text-white font-medium px-6"
              onClick={handleGetStarted}
            >
              <span>Get Started</span>
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white/20"
              onClick={handleLearnMore}
            >
              Learn More
            </Button>
          </div>
          
          <div 
            className="animate-fade-in"
            style={{ animationDelay: '0.6s' }}
          >
            <div className="p-4 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 shadow-lg">
              <p className="text-lg font-medium">
                "Your AI-powered business mentor for Hispanic entrepreneurs"
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-white"
        >
          <path d="M12 19V5M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
};

export default EnhancedHero;
