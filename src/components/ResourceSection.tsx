
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { BookOpen, FileText, GraduationCap, Users, Globe, FileCode, DollarSign } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ResourceSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  
  const handleLearnMore = (resourceType: string) => {
    // In a full implementation, this would navigate to specific resource pages
    console.log(`Navigate to ${resourceType} resources`);
  };
  
  return (
    <section className="py-20 bg-white" id="resources">
      <div className="container mx-auto px-4" ref={scrollRef}>
        <div className="text-center mb-12 reveal">
          <h2 className="text-burgundy mb-4">Recursos Para Emprendedores</h2>
          <p className="text-lg text-charcoal/80 max-w-2xl mx-auto">
            Accede a recursos especialmente seleccionados para empresarios hispanos en diferentes etapas de negocio.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto reveal">
          {/* Financing Resources */}
          <Card className="card-hover border-t-4 border-t-golden">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <DollarSign className="text-golden mr-2" size={20} />
                Financiamiento
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-charcoal/90">
                Opciones de préstamos para pequeños negocios, subvenciones para minorías, y programas de inversión específicos para emprendedores hispanos.
              </p>
              <ul className="text-sm space-y-1 text-charcoal/75 list-disc pl-5 mt-2">
                <li>Préstamos SBA para minorías</li>
                <li>Subvenciones para empresas hispanas</li>
                <li>Inversiones de capital de riesgo</li>
                <li>Microcréditos comunitarios</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                variant="outline" 
                className="w-full text-golden hover:text-golden/80 hover:bg-golden/10"
                onClick={() => handleLearnMore('financing')}
              >
                Ver recursos
              </Button>
            </CardFooter>
          </Card>
          
          {/* Legal Resources */}
          <Card className="card-hover border-t-4 border-t-burgundy">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <FileText className="text-burgundy mr-2" size={20} />
                Recursos Legales
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-charcoal/90">
                Guías sobre estructuras de negocio, requisitos de licencias, protección de propiedad intelectual y cumplimiento de normativas legales.
              </p>
              <ul className="text-sm space-y-1 text-charcoal/75 list-disc pl-5 mt-2">
                <li>Registro de empresas</li>
                <li>Requisitos de licencias y permisos</li>
                <li>Contratación de empleados</li>
                <li>Protección de propiedad intelectual</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                variant="outline" 
                className="w-full text-burgundy hover:text-burgundy/80 hover:bg-burgundy/10"
                onClick={() => handleLearnMore('legal')}
              >
                Ver recursos
              </Button>
            </CardFooter>
          </Card>
          
          {/* Marketing Resources */}
          <Card className="card-hover border-t-4 border-t-terracotta">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Globe className="text-terracotta mr-2" size={20} />
                Marketing Multicultural
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-charcoal/90">
                Estrategias de marketing bilingüe, conexión con consumidores hispanos, y aprovechamiento de valores culturales en tu estrategia de marca.
              </p>
              <ul className="text-sm space-y-1 text-charcoal/75 list-disc pl-5 mt-2">
                <li>Contenido bilingüe efectivo</li>
                <li>Marketing en redes sociales</li>
                <li>Calendario de festividades hispanas</li>
                <li>Estrategias comunitarias locales</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                variant="outline" 
                className="w-full text-terracotta hover:text-terracotta/80 hover:bg-terracotta/10"
                onClick={() => handleLearnMore('marketing')}
              >
                Ver recursos
              </Button>
            </CardFooter>
          </Card>
          
          {/* Education Resources */}
          <Card className="card-hover border-t-4 border-t-teal">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <GraduationCap className="text-teal mr-2" size={20} />
                Educación Empresarial
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-charcoal/90">
                Cursos, talleres y programas de formación especializados para empresarios hispanos, muchos disponibles en español.
              </p>
              <ul className="text-sm space-y-1 text-charcoal/75 list-disc pl-5 mt-2">
                <li>Gestión financiera básica</li>
                <li>Planificación de negocios</li>
                <li>Habilidades de liderazgo</li>
                <li>Talleres virtuales gratuitos</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                variant="outline" 
                className="w-full text-teal hover:text-teal/80 hover:bg-teal/10"
                onClick={() => handleLearnMore('education')}
              >
                Ver recursos
              </Button>
            </CardFooter>
          </Card>
          
          {/* Networking Resources */}
          <Card className="card-hover border-t-4 border-t-golden">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Users className="text-golden mr-2" size={20} />
                Networking Empresarial
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-charcoal/90">
                Conexiones con organizaciones hispanas de negocios, eventos de networking, y oportunidades de mentoría con empresarios exitosos.
              </p>
              <ul className="text-sm space-y-1 text-charcoal/75 list-disc pl-5 mt-2">
                <li>Cámaras de comercio hispanas</li>
                <li>Asociaciones profesionales</li>
                <li>Eventos y conferencias</li>
                <li>Programas de mentoría</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                variant="outline" 
                className="w-full text-golden hover:text-golden/80 hover:bg-golden/10"
                onClick={() => handleLearnMore('networking')}
              >
                Ver recursos
              </Button>
            </CardFooter>
          </Card>
          
          {/* Digital Tools */}
          <Card className="card-hover border-t-4 border-t-burgundy">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <FileCode className="text-burgundy mr-2" size={20} />
                Herramientas Digitales
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-charcoal/90">
                Software, aplicaciones y plataformas digitales con interfaces en español para gestionar todos los aspectos de tu negocio eficientemente.
              </p>
              <ul className="text-sm space-y-1 text-charcoal/75 list-disc pl-5 mt-2">
                <li>Gestión financiera y contabilidad</li>
                <li>CRM y servicio al cliente</li>
                <li>Marketing digital automatizado</li>
                <li>Comercio electrónico multilingüe</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                variant="outline" 
                className="w-full text-burgundy hover:text-burgundy/80 hover:bg-burgundy/10"
                onClick={() => handleLearnMore('digital')}
              >
                Ver recursos
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        <div className="text-center mt-12 reveal">
          <p className="text-sm text-charcoal/60 mb-6">
            Colaboramos con organizaciones líderes que apoyan a empresarios hispanos
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="h-12 w-24 bg-gray-200 rounded flex items-center justify-center">USHCC</div>
            <div className="h-12 w-24 bg-gray-200 rounded flex items-center justify-center">SBA</div>
            <div className="h-12 w-24 bg-gray-200 rounded flex items-center justify-center">LBAN</div>
            <div className="h-12 w-24 bg-gray-200 rounded flex items-center justify-center">SHPE</div>
            <div className="h-12 w-24 bg-gray-200 rounded flex items-center justify-center">CHCI</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceSection;
