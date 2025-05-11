
import { Star, Globe, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const GrowthStrategies = () => {
  return (
    <section className="py-20 bg-white" id="growth-strategies">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 reveal">
          <h2 className="text-burgundy mb-4">Growth Strategies</h2>
          <p className="text-lg text-charcoal/80 max-w-2xl mx-auto">
            Select the options to grow your business with personalized AI assistant.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto reveal">
          {/* Reward Customer Feedback */}
          <Card className="border shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-8 pb-6 px-6">
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center mb-6">
                  <Star className="text-white" size={24} />
                </div>
                
                <h3 className="text-xl font-semibold text-burgundy mb-3">
                  Reward Customer Feedback
                </h3>
                
                <p className="text-charcoal/80 mb-6">
                  Encourage and reward customer reviews to build credibility.
                </p>
                
                <Button 
                  variant="link" 
                  className="text-blue-600 hover:text-blue-800 p-0 flex items-center"
                >
                  Get Guidance
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Get Website */}
          <Card className="border shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-8 pb-6 px-6">
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                  <Globe className="text-white" size={24} />
                </div>
                
                <h3 className="text-xl font-semibold text-burgundy mb-3">
                  Get Website
                </h3>
                
                <p className="text-charcoal/80 mb-6">
                  Build your online presence with a professional website.
                </p>
                
                <Button 
                  variant="link" 
                  className="text-blue-600 hover:text-blue-800 p-0 flex items-center"
                >
                  Get Guidance
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Low Brand Awareness */}
          <Card className="border shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-8 pb-6 px-6">
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M12 22v-5" />
                    <path d="M9 7V2" />
                    <path d="M15 7V2" />
                    <path d="M12 7V2" />
                    <path d="M19 7c-.3 2.1-1.3 4-3 5.2" />
                    <path d="M5 7c.3 2.1 1.3 4 3 5.2" />
                    <path d="M12 22v-5" />
                    <path d="M12 17a5 5 0 0 1-5-5c0-2 2-4 5-9 3 5 5 7 5 9a5 5 0 0 1-5 5Z" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-semibold text-burgundy mb-3">
                  Low Brand Awareness
                </h3>
                
                <p className="text-charcoal/80 mb-6">
                  Struggling to get visibility and reach a wider audience.
                </p>
                
                <Button 
                  variant="link" 
                  className="text-blue-600 hover:text-blue-800 p-0 flex items-center"
                >
                  Get Guidance
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Lack of Social Media Knowledge */}
          <Card className="border shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-8 pb-6 px-6">
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="m10 13-2.5 2.5c-1.7-1-3-2.5-3.5-4.5" />
                    <path d="m13 10 2.5-2.5c1.7 1 3 2.5 3.5 4.5" />
                    <path d="M14.5 17.5 16 16l2 2-3 1-1-4" />
                    <path d="m8.5 12.5-1 .75-2-2L7 10l3 1" />
                    <path d="M15 19c-1.57 0-2.94-.81-3.75-2.03" />
                    <path d="M9 19c-3.3 0-6-2.7-6-6 0-1.18.347-2.28.944-3.2" />
                    <path d="M6 5.2A5.96 5.96 0 0 1 9 5c1.18 0 2.28.347 3.2.944" />
                    <path d="M10.76 8.82A6.02 6.02 0 0 1 15 5c3.3 0 6 2.7 6 6 0 1.18-.347 2.28-.944 3.2" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-semibold text-burgundy mb-3">
                  Lack of Social Media Knowledge
                </h3>
                
                <p className="text-charcoal/80 mb-6">
                  Uncertainty on what to post and how to engage followers.
                </p>
                
                <Button 
                  variant="link" 
                  className="text-blue-600 hover:text-blue-800 p-0 flex items-center"
                >
                  Get Guidance
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Create Content */}
          <Card className="border shadow-md hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
            <CardContent className="pt-8 pb-6 px-6">
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 bg-sky-200 rounded-full flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-800">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-semibold text-burgundy mb-3">
                  Create Content
                </h3>
                
                <p className="text-charcoal/80 mb-6">
                  Develop engaging social media content that connects with your audience.
                </p>
                
                <Button 
                  variant="link" 
                  className="text-blue-600 hover:text-blue-800 p-0 flex items-center"
                >
                  Get Guidance
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GrowthStrategies;
