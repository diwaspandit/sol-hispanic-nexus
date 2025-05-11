
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  business: string;
  location: string;
  content: string;
  rating: number;
  businessStage: string;
  industry: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Elena Rodríguez",
    business: "Sabores de México",
    location: "Phoenix, AZ",
    content: "Este chatbot realmente entiende los desafíos únicos que enfrentamos los empresarios hispanos. Me ayudó a encontrar recursos de financiación específicos para negocios de alimentos que nunca hubiera descubierto por mi cuenta. ¡Mi restaurante ha crecido un 30% desde entonces!",
    rating: 5,
    businessStage: "En crecimiento",
    industry: "Restaurante",
  },
  {
    id: 2,
    name: "Carlos Mendoza",
    business: "Mendoza Construction",
    location: "Miami, FL",
    content: "Como contratista, necesitaba ayuda con los complicados requisitos de licencias y seguros. La IA me proporcionó información clara en español sobre los requisitos específicos de Florida y me conectó con un abogado especializado en empresas hispanas.",
    rating: 5,
    businessStage: "Establecido",
    industry: "Construcción",
  },
  {
    id: 3,
    name: "Isabella Gómez",
    business: "Bella Beauty Salon",
    location: "Los Angeles, CA",
    content: "Estaba interesada en expandir mi salón pero tenía dudas sobre la financiación. El chatbot me ayudó a entender mis opciones y me guió paso a paso para solicitar un préstamo SBA. Ahora tengo dos ubicaciones y estoy planeando la tercera.",
    rating: 4,
    businessStage: "Expansión",
    industry: "Belleza",
  },
  {
    id: 4,
    name: "Miguel Herrera",
    business: "Digital Latino",
    location: "Chicago, IL",
    content: "Como empresa de marketing digital que atiende a la comunidad latina, necesitábamos estrategias específicas para nuestro mercado. El chatbot nos proporcionó datos demográficos actualizados y estrategias de redes sociales que han aumentado nuestros clientes significativamente.",
    rating: 5,
    businessStage: "Startup",
    industry: "Marketing Digital",
  },
  {
    id: 5,
    name: "Gabriela Fuentes",
    business: "Artesanías Latinas",
    location: "San Antonio, TX",
    content: "Estaba vendiendo mis productos artesanales solo localmente. Con la ayuda del chatbot, pude crear una tienda online bilingüe y aprender sobre exportación. Ahora envío mis productos a todo el país y estoy comenzando a exportar a México y Canadá.",
    rating: 5,
    businessStage: "En crecimiento",
    industry: "Comercio Minorista",
  }
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const showPreviousTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const showNextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  return (
    <section className="py-20 bg-burgundy/5" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 reveal">
          <h2 className="text-burgundy mb-4">Historias de Éxito</h2>
          <p className="text-lg text-charcoal/80 max-w-2xl mx-auto">
            Descubre cómo otros empresarios hispanos están creciendo sus negocios con nuestra asistencia personalizada.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto reveal">
          {/* Testimonial Card */}
          <Card className="border shadow-lg relative bg-white overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-burgundy via-terracotta to-golden"></div>
            
            <CardContent className="pt-8 pb-6 px-6 md:px-8">
              {/* Testimonial Content */}
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="text-golden fill-golden" size={18} />
                  ))}
                </div>
                
                <p className="text-lg italic mb-6">
                  "{testimonials[currentIndex].content}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-burgundy">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-sm text-charcoal/80">
                      {testimonials[currentIndex].business}, {testimonials[currentIndex].location}
                    </p>
                  </div>
                  
                  <div className="space-x-2">
                    <span className="inline-block px-2 py-1 text-xs rounded bg-golden/10 text-golden">
                      {testimonials[currentIndex].industry}
                    </span>
                    <span className="inline-block px-2 py-1 text-xs rounded bg-teal/10 text-teal">
                      {testimonials[currentIndex].businessStage}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Navigation Controls */}
              <div className="flex justify-center mt-6 space-x-4">
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={showPreviousTestimonial}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                
                {/* Pagination Indicators */}
                <div className="flex items-center space-x-2">
                  {testimonials.map((_, index) => (
                    <span 
                      key={index}
                      className={`block rounded-full transition-all ${
                        index === currentIndex 
                          ? 'w-6 h-2 bg-burgundy' 
                          : 'w-2 h-2 bg-gray-300'
                      }`}
                      onClick={() => setCurrentIndex(index)}
                      role="button"
                      tabIndex={0}
                      aria-label={`Go to testimonial ${index + 1}`}
                    ></span>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={showNextTestimonial}
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <div className="text-center mt-8">
            <Button 
              variant="link" 
              className="text-burgundy hover:text-terracotta"
            >
              Ver más historias de éxito
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
