
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Sophie L.",
    age: 42,
    image: "https://images.unsplash.com/photo-1639234850563-bb1549704236?auto=format&fit=crop&w=300&q=80",
    quote: "Après seulement 3 semaines d'utilisation, ma peau est visiblement plus ferme et les rides du contour de mes yeux se sont atténuées. Ce collagène est devenu mon secret de beauté quotidien !",
    rating: 5
  },
  {
    id: 2,
    name: "Marie D.",
    age: 38,
    image: "https://images.unsplash.com/photo-1550479023-2a811e19dfd6?auto=format&fit=crop&w=300&q=80",
    quote: "Je suis impressionnée par les résultats. Non seulement ma peau est plus lumineuse, mais mes cheveux et mes ongles sont également plus forts. Excellent produit que je recommande vivement.",
    rating: 5
  },
  {
    id: 3,
    name: "Isabelle M.",
    age: 45,
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80",
    quote: "Les compliments sur ma peau ne cessent depuis que j'ai commencé à prendre ce collagène. On me demande constamment quel est mon secret ! Ma peau n'a jamais été aussi souple et éclatante.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-collagen-gray/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-collagen-pink/60 text-collagen-deep-purple font-medium text-sm mb-4">
            NOS CLIENTES TÉMOIGNENT
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Des résultats visibles et durables
          </h2>
          <p className="text-lg text-gray-600">
            Découvrez les transformations réelles que nos clientes ont expérimentées avec notre Collagène Extra.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border border-collagen-light-purple/20 shadow-md overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col items-center mb-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#9b87f5" stroke="none" className="mx-0.5">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 text-center italic">
                  "{testimonial.quote}"
                </p>
                <div className="text-center">
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.age} ans</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
