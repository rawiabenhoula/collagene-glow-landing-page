
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const ProductSection = () => {
  return (
    <section id="ingredients" className="py-24 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="bg-gradient-to-tr from-collagen-light-purple/50 to-collagen-pink/40 rounded-full aspect-square max-w-md mx-auto p-6 shadow-xl">
              <div className="bg-white rounded-full w-full h-full p-6 shadow-inner flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=600&q=80" 
                  alt="Collagène Extra" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
            
            <div className="absolute top-5 -left-4 glass p-3 rounded-lg shadow-lg rotate-3 transform animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-collagen-deep-purple bg-collagen-light-purple/30 px-2 py-1 rounded-full">
                  100% Naturel
                </span>
              </div>
            </div>
            
            <div className="absolute bottom-10 -right-4 glass p-3 rounded-lg shadow-lg -rotate-3 transform animate-fade-in" style={{animationDelay: '0.5s'}}>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-collagen-deep-purple bg-collagen-pink/30 px-2 py-1 rounded-full">
                  Sans parfum ajouté
                </span>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <span className="inline-block px-4 py-2 rounded-full bg-collagen-light-purple/30 text-collagen-deep-purple font-medium text-sm mb-4">
              INGRÉDIENTS PREMIUM
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Formule marine exclusive à haute absorption
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Notre collagène est extrait des profondeurs de l'océan et hydrolysé pour une absorption optimale. Chaque dose fournit 10 000mg de peptides de collagène marin de type I et III.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                "Collagène marin hydrolysé (Types I et III)",
                "Acide hyaluronique pour une hydratation maximale",
                "Vitamines C et E pour la protection antioxydante",
                "Zinc pour renforcer la production naturelle de collagène",
                "Biotine pour fortifier la peau, les cheveux et les ongles"
              ].map((ingredient, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-collagen-purple mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{ingredient}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-collagen-deep-purple hover:bg-collagen-purple">
                Acheter maintenant
              </Button>
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="font-medium text-gray-800">59,99€</p>
                  <p className="text-xs text-gray-500 line-through">69,99€</p>
                </div>
                <div className="bg-collagen-pink/80 text-collagen-deep-purple font-semibold text-sm px-3 py-1 rounded-full">
                  -15%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
