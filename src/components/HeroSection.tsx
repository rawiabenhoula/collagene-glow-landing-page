
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-collagen-gray to-collagen-light-purple/30" />
      <div className="absolute inset-0 -z-10 opacity-10 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center" />
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <span className="inline-block px-4 py-2 rounded-full bg-collagen-pink/60 text-collagen-deep-purple font-medium text-sm">
              LA SOLUTION PEAU PARFAITE
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Révélez l'éclat naturel de votre peau
            </h1>
            <p className="text-xl text-gray-600 max-w-lg">
              Notre formule exclusive de collagène marin hydrolysé renforce votre peau de l'intérieur pour une apparence plus jeune, plus ferme et plus éclatante.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-collagen-deep-purple hover:bg-collagen-purple text-white">
                Acheter maintenant
              </Button>
              <Button size="lg" variant="outline" className="border-collagen-deep-purple text-collagen-deep-purple hover:bg-collagen-light-purple/20">
                En savoir plus
              </Button>
            </div>
            <div className="flex items-center gap-5 pt-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full border-2 border-white bg-collagen-peach"></div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-collagen-pink"></div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-collagen-light-purple"></div>
              </div>
              <div>
                <p className="font-medium text-gray-800">
                  Rejoignez 10 000+ clients satisfaits
                </p>
              </div>
            </div>
          </div>
          <div className="relative animate-fade-in-right">
            <div className="relative z-10 aspect-square max-w-md mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=1080&q=80" 
                alt="Femme à la peau éclatante" 
                className="object-cover w-full h-full rounded-2xl shadow-lg"
              />
            </div>
            <div className="absolute top-10 -left-10 glass p-4 rounded-lg shadow-lg animate-fade-in" style={{animationDelay: '0.5s'}}>
              <div className="flex items-center gap-3">
                <div className="bg-collagen-purple/20 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-collagen-deep-purple">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">Résultat visible</p>
                  <p className="text-xs text-gray-500">Dès 14 jours</p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-20 -right-5 glass p-4 rounded-lg shadow-lg animate-fade-in" style={{animationDelay: '0.7s'}}>
              <div className="flex items-center gap-3">
                <div className="bg-collagen-pink/20 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-collagen-deep-purple">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">Ingrédients naturels</p>
                  <p className="text-xs text-gray-500">Sans additifs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
