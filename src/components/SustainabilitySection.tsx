
import { Button } from '@/components/ui/button';

const SustainabilitySection = () => {
  const initiatives = [
    {
      title: 'Eco-Friendly Packaging',
      description: '100% recyclable bottles and compostable labels',
      icon: '🌱',
      metric: '70% reduction in plastic use'
    },
    {
      title: 'Local Sourcing',
      description: 'Supporting local farmers with fair trade practices',
      icon: '🌍',
      metric: '85% of ingredients locally sourced'
    },
    {
      title: 'Water Conservation',
      description: 'Advanced water recycling in our production process',
      icon: '💧',
      metric: '50% less water than industry average'
    },
    {
      title: 'Renewable Energy',
      description: 'Solar-powered production facilities',
      icon: '☀️',
      metric: '40% of energy from renewable sources'
    }
  ];

  return (
    <section id="sustainability" className="section-padding bg-afriroots-green/10">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-heading">Our Sustainability Commitment</h2>
          <p className="section-subheading">
            We believe in nurturing not just people, but also our planet. Our commitment to sustainability guides everything we do.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {initiatives.map((initiative, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-3xl mb-3">{initiative.icon}</div>
                  <h3 className="text-lg font-bold text-afriroots-green-dark mb-2">{initiative.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{initiative.description}</p>
                  <div className="bg-afriroots-green/10 py-2 px-3 rounded-full text-sm font-medium text-afriroots-green-dark inline-block">
                    {initiative.metric}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <Button className="btn-primary">Read Our Sustainability Report</Button>
            </div>
          </div>
          
          <div className="relative">
            <blockquote className="bg-white p-8 rounded-lg shadow-md relative z-10">
              <p className="text-xl italic text-gray-700 mb-6">
                "At AfriRoots, sustainability isn't just a buzzword—it's woven into the fabric of our business. 
                From farm to bottle, we're committed to practices that honor our environment and communities."
              </p>
              <footer className="flex items-center">
                <div className="w-12 h-12 bg-afriroots-orange/20 rounded-full mr-4"></div>
                <div>
                  <cite className="font-bold text-afriroots-green-dark not-italic">Sarah Johnson</cite>
                  <p className="text-sm text-gray-600">Sustainability Director</p>
                </div>
              </footer>
            </blockquote>
            <div className="absolute top-4 -right-4 md:-right-8 bg-afriroots-green/20 h-24 w-24 rounded-full -z-0"></div>
            <div className="absolute -bottom-4 -left-4 md:-left-8 bg-afriroots-orange/20 h-32 w-32 rounded-full -z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
