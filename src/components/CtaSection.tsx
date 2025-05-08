
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-collagen-light-purple to-collagen-pink/70 opacity-90"></div>
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white text-shadow">
            Révélez l'éclat naturel de votre peau dès aujourd'hui
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">
            Rejoignez les milliers de personnes qui ont transformé leur peau avec notre Collagène Extra. Commencez votre voyage vers une peau plus ferme, plus hydratée et visiblement plus jeune.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-collagen-deep-purple hover:bg-gray-100">
              Acheter maintenant
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              En savoir plus
            </Button>
          </div>
          <div className="mt-8">
            <p className="text-white font-medium">
              Livraison gratuite • Garantie 30 jours satisfait ou remboursé
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
