
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "q1",
    question: "Quand vais-je voir des résultats ?",
    answer: "La plupart de nos clients constatent une amélioration visible de la qualité de leur peau après 2 à 3 semaines d'utilisation quotidienne. Pour des résultats optimaux et durables, nous recommandons une utilisation continue pendant au moins 3 mois."
  },
  {
    id: "q2",
    question: "Comment dois-je utiliser ce produit ?",
    answer: "Prenez une dose (10g) par jour, de préférence le matin à jeun ou le soir avant le coucher. Mélangez la poudre dans un verre d'eau ou ajoutez-la à votre smoothie préféré. Pour des résultats optimaux, utilisez quotidiennement."
  },
  {
    id: "q3",
    question: "Le produit contient-il des allergènes ?",
    answer: "Notre Collagène Extra contient des ingrédients d'origine marine. Si vous avez une allergie aux produits de la mer, nous vous recommandons de consulter votre médecin avant utilisation. Le produit ne contient ni gluten, ni lactose, ni OGM."
  },
  {
    id: "q4",
    question: "Puis-je prendre ce collagène pendant la grossesse ?",
    answer: "Par mesure de précaution, nous recommandons aux femmes enceintes ou allaitantes de consulter leur médecin avant de commencer toute supplémentation, y compris notre Collagène Extra."
  },
  {
    id: "q5",
    question: "Quelle est la durée de conservation du produit ?",
    answer: "Notre Collagène Extra a une durée de conservation de 24 mois à partir de la date de fabrication lorsqu'il est conservé dans un endroit frais et sec. Une fois le produit ouvert, nous recommandons de le consommer dans les 3 mois."
  }
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-collagen-light-purple/40 text-collagen-deep-purple font-medium text-sm mb-4">
            QUESTIONS FRÉQUENTES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Tout ce que vous devez savoir
          </h2>
          <p className="text-lg text-gray-600">
            Nous avons rassemblé les questions les plus fréquemment posées pour vous aider à tout comprendre sur notre Collagène Extra.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="border-b border-collagen-light-purple/20">
                <AccordionTrigger className="text-left text-gray-800 hover:text-collagen-deep-purple hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
