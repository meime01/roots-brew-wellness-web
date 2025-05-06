
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-heading">Our Story</h2>
          <p className="section-subheading">
            Rooted in tradition, driven by innovation, and committed to your wellbeing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-afriroots-cream rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/placeholder.svg" 
                alt="AfriRoots Team" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-afriroots-orange/20 h-32 w-32 rounded-full -z-10"></div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-afriroots-green-dark mb-4">Our Mission & Values</h3>
            <p className="text-gray-700 mb-4">
              AfriRoots was founded in April 2025 with a vision to reinvent traditional African beverages for the modern consumer. 
              Inspired by generations of maheu brewing, we created NutriBrew—a nutritious, probiotic-rich drink enhanced with bold 
              flavors like peppermint and cinnamon.
            </p>
            <p className="text-gray-700 mb-6">
              Our mission is to nourish communities with authentic, innovative, and healthful African beverages. Our vision is to 
              become Africa's leading brand in traditional, natural, and functional drinks.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-afriroots-green/10 p-4 rounded-lg">
                <h4 className="font-bold text-afriroots-green mb-2">Authenticity</h4>
                <p className="text-sm text-gray-600">Honoring traditional recipes and ingredients</p>
              </div>
              <div className="bg-afriroots-orange/10 p-4 rounded-lg">
                <h4 className="font-bold text-afriroots-orange mb-2">Innovation</h4>
                <p className="text-sm text-gray-600">Blending tradition with modern flavors</p>
              </div>
              <div className="bg-afriroots-brown/10 p-4 rounded-lg">
                <h4 className="font-bold text-afriroots-brown mb-2">Sustainability</h4>
                <p className="text-sm text-gray-600">Eco-friendly practices and local sourcing</p>
              </div>
              <div className="bg-afriroots-green/10 p-4 rounded-lg">
                <h4 className="font-bold text-afriroots-green mb-2">Community</h4>
                <p className="text-sm text-gray-600">Supporting local farmers and economies</p>
              </div>
            </div>
            
            <Button className="btn-primary">Learn More About Us</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
