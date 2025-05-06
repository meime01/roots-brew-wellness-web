
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const IngredientsSection = () => {
  const [activeIngredient, setActiveIngredient] = useState('moringa');
  
  const ingredients = [
    {
      id: 'moringa',
      name: 'Moringa',
      description: 'Known as the "miracle tree," moringa is packed with vitamins, minerals, and all nine essential amino acids. It has been used in traditional medicine for centuries.',
      benefits: ['Rich in antioxidants', 'Contains all essential amino acids', 'High in vitamins A, C, and E', 'Supports immune function'],
      color: 'bg-afriroots-green',
      image: '/placeholder.svg'
    },
    {
      id: 'fermented-rice',
      name: 'Fermented Rice',
      description: 'Our specially fermented rice creates beneficial probiotics and makes nutrients more bioavailable. The fermentation process enhances digestibility and creates a unique flavor profile.',
      benefits: ['Supports gut health', 'Improves nutrient absorption', 'Contains natural probiotics', 'Enhances flavor complexity'],
      color: 'bg-afriroots-cream',
      image: '/placeholder.svg'
    },
    {
      id: 'watermelon',
      name: 'Watermelon Syrup',
      description: 'Our natural watermelon syrup provides sweetness without artificial ingredients. It adds a refreshing flavor while containing natural lycopene and citrulline.',
      benefits: ['Natural sweetness', 'Contains lycopene', 'Rich in citrulline', 'Hydrating properties'],
      color: 'bg-afriroots-orange',
      image: '/placeholder.svg'
    }
  ];
  
  const active = ingredients.find(i => i.id === activeIngredient);

  return (
    <section id="ingredients" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-heading">Ingredients Spotlight</h2>
          <p className="section-subheading">
            We carefully select each ingredient for its exceptional nutritional profile and authentic flavor.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {ingredients.map((ingredient) => (
            <button
              key={ingredient.id}
              onClick={() => setActiveIngredient(ingredient.id)}
              className={`px-6 py-3 rounded-full text-sm md:text-base font-medium transition-colors ${
                activeIngredient === ingredient.id 
                  ? `${ingredient.color} text-white` 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {ingredient.name}
            </button>
          ))}
        </div>
        
        {active && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gray-50 rounded-2xl overflow-hidden shadow-sm">
            <div className={`${active.color}/20 flex items-center justify-center p-8 h-64 md:h-full`}>
              <img 
                src={active.image} 
                alt={active.name} 
                className="max-h-full object-contain"
              />
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold text-afriroots-green-dark mb-4">{active.name}</h3>
              <p className="text-gray-700 mb-6">{active.description}</p>
              
              <h4 className="font-bold text-afriroots-orange mb-3">Key Benefits:</h4>
              <ul className="mb-6 space-y-2">
                {active.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-afriroots-orange">•</span>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <Button className="btn-primary">Learn More</Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default IngredientsSection;
