
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    content:
      "Grâce à RoboGenius Lab, j'ai pu transformer ma passion pour la robotique en compétence professionnelle. Les simulateurs sont particulièrement utiles pour pratiquer sans risque.",
    author: "Marie Dubois",
    role: "Ingénieure en mécatronique",
    image: "https://i.pravatar.cc/150?img=36",
  },
  {
    content:
      "La pédagogie est exceptionnelle. J'ai commencé sans aucune connaissance en robotique et maintenant je construis mes propres prototypes. La communauté est également très accueillante.",
    author: "Thomas Leroy",
    role: "Étudiant en informatique",
    image: "https://i.pravatar.cc/150?img=69",
  },
  {
    content:
      "En tant qu'enseignante, j'utilise RoboGenius Lab pour mes cours de technologie. Les élèves adorent et progressent beaucoup plus rapidement qu'avec les méthodes traditionnelles.",
    author: "Sophie Moreau",
    role: "Professeure de technologie",
    image: "https://i.pravatar.cc/150?img=5",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-robo-lightGray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-robo-darkGray mb-4">
            Ce que disent nos apprenants
          </h2>
          <p className="text-robo-darkGray/80 max-w-xl mx-auto">
            Découvrez les témoignages de ceux qui ont transformé leur passion pour la robotique en expertise concrète.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-none shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-robo-blue/30">
                      <path d="M9.33333 22H2.66667C2.29848 22 2 21.7015 2 21.3333V14.6667C2 9.88536 5.8854 6 10.6667 6H12C12.3682 6 12.6667 6.29848 12.6667 6.66667V8C12.6667 8.36819 12.3682 8.66667 12 8.66667H10.6667C7.35876 8.66667 4.66667 11.3588 4.66667 14.6667V19.3333H9.33333C10.8061 19.3333 12 18.1394 12 16.6667V14.6667C12 13.1939 10.8061 12 9.33333 12H8C7.63181 12 7.33333 11.7015 7.33333 11.3333V10C7.33333 9.63181 7.63181 9.33333 8 9.33333H9.33333C12.2789 9.33333 14.6667 11.7211 14.6667 14.6667V16.6667C14.6667 19.6122 12.2789 22 9.33333 22Z" fill="currentColor"/>
                      <path d="M26 22H19.3333C18.9651 22 18.6667 21.7015 18.6667 21.3333V14.6667C18.6667 9.88536 22.5521 6 27.3333 6H28.6667C29.0349 6 29.3333 6.29848 29.3333 6.66667V8C29.3333 8.36819 29.0349 8.66667 28.6667 8.66667H27.3333C24.0254 8.66667 21.3333 11.3588 21.3333 14.6667V19.3333H26C27.4728 19.3333 28.6667 18.1394 28.6667 16.6667V14.6667C28.6667 13.1939 27.4728 12 26 12H24.6667C24.2985 12 24 11.7015 24 11.3333V10C24 9.63181 24.2985 9.33333 24.6667 9.33333H26C28.9455 9.33333 31.3333 11.7211 31.3333 14.6667V16.6667C31.3333 19.6122 28.9455 22 26 22Z" fill="currentColor"/>
                    </svg>
                  </div>

                  <p className="text-robo-darkGray/80 mb-6 flex-grow">
                    {testimonial.content}
                  </p>

                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-200 mr-4" 
                         style={{ backgroundImage: `url(${testimonial.image})`, backgroundSize: "cover" }} />
                    <div>
                      <div className="font-semibold text-robo-darkGray">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-robo-darkGray/70">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
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
