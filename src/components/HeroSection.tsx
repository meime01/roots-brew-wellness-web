
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-afriroots-cream to-white pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-afriroots-green-dark mb-4">
            Nature's Nourishment, <span className="text-afriroots-orange">Reimagined</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Discover NutriBrew - our signature beverage crafted from moringa, fermented rice, and watermelon syrup. 
            A delicious blend of health, sustainability, and African tradition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="btn-primary">Shop Now</Button>
            <Button variant="outline" className="border-afriroots-green text-afriroots-green hover:bg-afriroots-green hover:text-white">
              Learn More
            </Button>
          </div>
        </div>
        <div className="relative mt-8 md:mt-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="bg-afriroots-green/10 rounded-full h-64 w-64 md:h-80 md:w-80 mx-auto"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src="/lovable-uploads/10b82289-2764-49b8-a585-a46baaba0c3f.png" 
              alt="NutriBrew Product" 
              className="h-72 md:h-96 object-contain"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-afriroots-orange/20 h-20 w-20 rounded-full"></div>
          <div className="absolute -top-4 -left-4 bg-afriroots-green/20 h-16 w-16 rounded-full"></div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
