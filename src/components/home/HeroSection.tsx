
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import RobotImage from "../ui/RobotImage";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 z-0 circuit-bg opacity-50"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <span className="inline-block bg-robo-blue/10 text-robo-blue px-4 py-1.5 rounded-full font-medium text-sm mb-4">
                Plateforme d'Excellence en Robotique
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-robo-darkGray leading-tight">
                Devenez expert en robotique,{" "}
                <span className="text-robo-blue">pas à pas</span>
              </h1>
              <p className="mt-6 text-lg text-robo-darkGray/80 max-w-lg">
                Une plateforme d'apprentissage complète qui vous guide de la découverte à l'expertise en robotique à travers des cours interactifs, des simulateurs et une communauté active.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-robo-blue hover:bg-robo-blue/90 text-white animated-btn flex items-center gap-2">
                Commencer gratuitement
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-robo-blue text-robo-blue hover:bg-robo-blue/5">
                Découvrir les parcours
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white bg-gray-200"
                    style={{ 
                      backgroundImage: `url(https://i.pravatar.cc/150?img=${20 + i})`,
                      backgroundSize: "cover"
                    }}
                  />
                ))}
              </div>
              <div className="text-sm">
                <span className="font-semibold">+5000</span> apprenants nous font confiance
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-md relative">
              <div className="absolute inset-0 bg-gradient-to-br from-robo-blue/20 to-robo-green/20 rounded-3xl transform rotate-6 scale-95"></div>
              <div className="relative bg-white p-6 rounded-3xl shadow-xl border border-robo-lightGray animate-float">
                <RobotImage className="w-full h-auto" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-robo-blue text-white p-4 rounded-2xl shadow-lg">
                <div className="text-xl font-bold">4.9/5</div>
                <div className="text-xs">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
