
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Zap, Star, Book } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const ProductsSection = () => {
  const [activeFlavor, setActiveFlavor] = useState('peppermint');
  
  const flavors = [
    { id: 'peppermint', name: 'Peppermint', color: 'bg-amber-200', image: '/lovable-uploads/10b82289-2764-49b8-a585-a46baaba0c3f.png' },
    { id: 'cinnamon', name: 'Cinnamon', color: 'bg-red-200', image: '/lovable-uploads/b038e157-d4da-427a-b88f-6c369fd7494d.png' },
  ];
  
  const benefits = [
    { 
      icon: <Heart className="h-6 w-6 text-afriroots-orange" />, 
      title: 'Naturally fermented', 
      description: 'Traditional fermentation process enhances flavor and nutrients' 
    },
    { 
      icon: <Zap className="h-6 w-6 text-afriroots-orange" />, 
      title: 'Probiotic benefits', 
      description: 'Supports gut health and improves digestion' 
    },
    { 
      icon: <Star className="h-6 w-6 text-afriroots-orange" />, 
      title: 'No artificial preservatives', 
      description: 'Only natural ingredients for a pure taste experience' 
    },
    { 
      icon: <Book className="h-6 w-6 text-afriroots-orange" />, 
      title: 'Rich in nutrients', 
      description: 'Packed with fiber and essential nutrients' 
    }
  ];

  return (
    <section id="products" className="section-padding bg-afriroots-cream/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-heading">Our Products</h2>
          <p className="section-subheading">
            Discover the refreshing taste and amazing health benefits of our signature NutriBrew beverages.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className={`${flavors.find(f => f.id === activeFlavor)?.color} rounded-full h-64 w-64 md:h-80 md:w-80 mx-auto transition-colors duration-500`}></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src={flavors.find(f => f.id === activeFlavor)?.image} 
                alt={`NutriBrew ${flavors.find(f => f.id === activeFlavor)?.name} Flavor`} 
                className="h-72 md:h-96 object-contain transition-all duration-500"
              />
            </div>
            <Badge className="absolute top-0 right-0 lg:top-8 lg:right-8 bg-afriroots-orange text-white border-none">
              100% Natural
            </Badge>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-afriroots-green-dark mb-4">
              NutriBrew
              <span className="ml-2 text-afriroots-orange">
                {flavors.find(f => f.id === activeFlavor)?.name}
              </span>
            </h3>
            
            <p className="text-gray-700 mb-6">
              {activeFlavor === 'peppermint' ? 
                'A cool, revitalizing twist on traditional maheu. Our peppermint NutriBrew is perfect for hot days and digestive support. Each 400ml bottle is packed with refreshing flavor and nutrition.' :
                'Warm, comforting, and packed with flavor and antioxidants. Our cinnamon NutriBrew is ideal for a cozy refreshment. Each 400ml bottle offers a perfect balance of tradition and innovation.'}
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8">
              {flavors.map((flavor) => (
                <button
                  key={flavor.id}
                  onClick={() => setActiveFlavor(flavor.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFlavor === flavor.id 
                      ? 'bg-afriroots-green text-white' 
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {flavor.name}
                </button>
              ))}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex">
                  <div className="mr-3 mt-1">{benefit.icon}</div>
                  <div>
                    <h4 className="font-bold text-afriroots-green-dark">{benefit.title}</h4>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary">Shop Now</Button>
              <Button variant="outline" className="border-afriroots-green text-afriroots-green hover:bg-afriroots-green hover:text-white">
                View Nutrition Facts
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-24">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-afriroots-green-dark mb-3">Featured Products</h3>
            <p className="text-gray-600">Our range of nutritious, traditional beverages</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {flavors.map((flavor) => (
              <Card key={flavor.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className={`${flavor.color} p-4`}>
                  <AspectRatio ratio={1 / 1} className="bg-white/20 rounded-lg">
                    <img 
                      src={flavor.image} 
                      alt={`NutriBrew ${flavor.name}`}
                      className="object-contain p-4 h-full w-full"
                    />
                  </AspectRatio>
                </div>
                <CardContent className="pt-4">
                  <h4 className="font-bold text-afriroots-green-dark">NutriBrew {flavor.name}</h4>
                  <p className="text-sm text-gray-600 mt-1">400ml bottle</p>
                  <div className="flex justify-between items-center mt-3">
                    <span className="font-bold text-afriroots-orange">$0.50</span>
                    <Button variant="outline" size="sm" className="text-xs border-afriroots-green text-afriroots-green hover:bg-afriroots-green hover:text-white">
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
