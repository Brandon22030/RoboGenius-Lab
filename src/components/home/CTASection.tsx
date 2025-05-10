
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-robo-blue to-robo-blue/80 rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="p-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Prêt à devenir un expert en robotique ?
              </h2>
              <p className="text-white/90 mb-8 text-lg">
                Rejoignez plus de 5000 apprenants et commencez votre parcours dès aujourd'hui.
                Inscrivez-vous gratuitement et accédez à votre premier module.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-robo-blue hover:bg-white/90">
                  S'inscrire gratuitement
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  En savoir plus
                </Button>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="absolute inset-0 bg-white/5"></div>
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=880&h=660"
                alt="Robot in laboratory"
                className="object-cover h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
