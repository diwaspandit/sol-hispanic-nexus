
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

const BusinessStage = () => {
  return (
    <section className="py-20 bg-offwhite" id="business-stage">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-burgundy mb-4 reveal">Your Business Stage</h2>
          <p className="text-lg text-charcoal/80 max-w-2xl mx-auto reveal">
            Our AI has analyzed your business profile and identified your current stage 
            along with personalized recommendations to help you grow.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Current Stage Card */}
          <Card className="mb-12 shadow-lg reveal border-l-4 border-l-burgundy">
            <CardHeader className="bg-burgundy/5 border-b">
              <CardTitle className="text-burgundy text-2xl">Beginner Stage</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-charcoal/80 mb-6">
                You are at the beginning of your business journey. Focus on building strong foundations,
                understanding your target market, and developing your core offerings.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-terracotta" size={20} />
                  <span className="text-sm font-medium">Business plan created</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-terracotta" size={20} />
                  <span className="text-sm font-medium">Target audience identified</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-terracotta" size={20} />
                  <span className="text-sm font-medium">Initial market research</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-terracotta" size={20} />
                  <span className="text-sm font-medium">Basic brand elements</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Resource Cards */}
          <div className="grid md:grid-cols-3 gap-6 reveal">
            {/* Next Steps */}
            <Card className="card-hover">
              <CardHeader className="pb-2">
                <CardTitle className="text-burgundy text-xl">Next Steps</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-golden mt-0.5 shrink-0" size={16} />
                    <span>Set measurable goals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-golden mt-0.5 shrink-0" size={16} />
                    <span>Create action plans</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-golden mt-0.5 shrink-0" size={16} />
                    <span>Meet mentors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-golden mt-0.5 shrink-0" size={16} />
                    <span>Secure initial funding</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            {/* Resources */}
            <Card className="card-hover">
              <CardHeader className="pb-2">
                <CardTitle className="text-burgundy text-xl">Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-teal mt-0.5 shrink-0" size={16} />
                    <span>Business templates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-teal mt-0.5 shrink-0" size={16} />
                    <span>Learning materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-teal mt-0.5 shrink-0" size={16} />
                    <span>Expert guidance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-teal mt-0.5 shrink-0" size={16} />
                    <span>Networking events</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            {/* Support */}
            <Card className="card-hover">
              <CardHeader className="pb-2">
                <CardTitle className="text-burgundy text-xl">Support</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-terracotta mt-0.5 shrink-0" size={16} />
                    <span>Community forum</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-terracotta mt-0.5 shrink-0" size={16} />
                    <span>Expert mentorship</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-terracotta mt-0.5 shrink-0" size={16} />
                    <span>24/7 assistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-terracotta mt-0.5 shrink-0" size={16} />
                    <span>Funding opportunities</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessStage;
