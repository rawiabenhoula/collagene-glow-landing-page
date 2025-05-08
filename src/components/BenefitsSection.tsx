
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    id: 1,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
      </svg>
    ),
    title: "Hydratation intense",
    description: "Améliore significativement l'hydratation de la peau grâce à sa capacité à retenir l'eau dans les tissus cutanés."
  },
  {
    id: 2,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="4"></circle>
        <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line>
        <line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line>
        <line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line>
        <line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line>
        <line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>
      </svg>
    ),
    title: "Réduction des rides",
    description: "Combat efficacement les signes visibles du vieillissement en diminuant la profondeur des rides et ridules existantes."
  },
  {
    id: 3,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
      </svg>
    ),
    title: "Élasticité améliorée",
    description: "Restaure la souplesse naturelle de la peau grâce à une formule qui stimule la production de nouvelles fibres d'élastine."
  },
  {
    id: 4,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
        <line x1="9" y1="9" x2="9.01" y2="9"></line>
        <line x1="15" y1="9" x2="15.01" y2="9"></line>
      </svg>
    ),
    title: "Éclat radieux",
    description: "Ravive la luminosité naturelle de votre teint et unifie le grain de peau pour un résultat visiblement plus éclatant."
  },
  {
    id: 5,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
        <path d="M3 3v5h5"></path>
        <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
        <path d="M16 16h5v5"></path>
      </svg>
    ),
    title: "Régénération cellulaire",
    description: "Accélère le processus naturel de renouvellement cellulaire pour une peau visiblement plus jeune et plus saine."
  },
  {
    id: 6,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
      </svg>
    ),
    title: "Protection antioxydante",
    description: "Défend votre peau contre les radicaux libres et les agressions extérieures grâce à sa formule enrichie en antioxydants."
  }
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-24 bg-gradient-to-b from-collagen-gray/50 to-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Les bienfaits incomparables de notre collagène
          </h2>
          <p className="text-lg text-gray-600">
            Notre formule exclusive agit en profondeur pour transformer votre peau de l'intérieur. Découvrez pourquoi des milliers de clients nous font confiance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={benefit.id} className="border border-collagen-light-purple/20 shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
              <CardContent className="p-6">
                <div className="mb-4 p-3 bg-collagen-purple/10 rounded-full w-12 h-12 flex items-center justify-center text-collagen-deep-purple group-hover:bg-collagen-purple/20 transition-colors">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
