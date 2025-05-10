
import { Cpu, Book, Users, Code } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Parcours personnalisés",
    description: "Des programmes adaptés à tous les niveaux, de la découverte à l'expertise.",
    icon: Book,
    color: "bg-robo-blue/10 text-robo-blue",
  },
  {
    title: "Simulateurs robotiques",
    description: "Testez vos connaissances dans des environnements virtuels réalistes et sécurisés.",
    icon: Cpu,
    color: "bg-robo-green/10 text-robo-green",
  },
  {
    title: "Communauté d'experts",
    description: "Échangez avec des mentors et d'autres passionnés qui partagent vos intérêts.",
    icon: Users,
    color: "bg-robo-orange/10 text-robo-orange",
  },
  {
    title: "Programmation pratique",
    description: "Apprenez à coder en direct avec notre éditeur interactif intégré.",
    icon: Code,
    color: "bg-robo-darkGray/10 text-robo-darkGray",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-robo-lightGray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-robo-darkGray mb-4">
            Une plateforme complète pour maîtriser la robotique
          </h2>
          <p className="text-robo-darkGray/80 max-w-xl mx-auto">
            RoboGenius Lab vous offre tous les outils nécessaires pour développer vos compétences en robotique, quel que soit votre niveau actuel.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardHeader className="pb-2">
                <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-semibold text-robo-darkGray">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-robo-darkGray/80">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
