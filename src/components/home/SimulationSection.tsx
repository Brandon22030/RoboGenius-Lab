
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const SimulationSection = () => {
  return (
    <section className="py-16 gradient-bg-tech text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Testez vos compétences dans notre simulateur robotique
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              Notre simulateur interactif vous permet d'apprendre la programmation 
              robotique dans un environnement virtuel sécurisé. Codez, testez et 
              observez immédiatement les résultats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-robo-blue hover:bg-white/90 animated-btn flex items-center gap-2">
                <Play className="h-4 w-4" />
                Essayer le simulateur
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Voir des exemples
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 shadow-lg">
              <div className="bg-robo-darkGray rounded-lg overflow-hidden">
                <div className="flex items-center gap-2 bg-black/30 p-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-robo-error rounded-full"></div>
                    <div className="w-3 h-3 bg-robo-warning rounded-full"></div>
                    <div className="w-3 h-3 bg-robo-success rounded-full"></div>
                  </div>
                  <div className="text-xs text-center flex-1">simulateur-robotique.js</div>
                </div>
                <div className="p-4 font-robotomono text-sm">
                  <pre className="text-white/80">
                    <code>
{`// Robot control script
const robot = new RobotSimulator();

robot.initialize({
  sensors: ['ultrasonic', 'infrared'],
  motors: ['left', 'right'],
  position: { x: 10, y: 10 }
});

function moveForward(distance) {
  robot.motors.left.setPower(0.8);
  robot.motors.right.setPower(0.8);
  robot.wait(distance * 1000);
  robot.motors.stop();
}

function detectObstacle() {
  return robot.sensors.ultrasonic.read() < 20;
}

// Main program
robot.start(() => {
  while (robot.isActive()) {
    if (detectObstacle()) {
      robot.turn(90); // Turn right
    } else {
      moveForward(1);
    }
  }
});`}
                    </code>
                  </pre>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="bg-robo-darkGray/80 p-2 rounded-md text-center cursor-pointer hover:bg-robo-darkGray transition-colors">
                  <div className="text-xs font-medium">Capteurs</div>
                </div>
                <div className="bg-robo-darkGray/80 p-2 rounded-md text-center cursor-pointer hover:bg-robo-darkGray transition-colors">
                  <div className="text-xs font-medium">Moteurs</div>
                </div>
                <div className="bg-robo-darkGray/80 p-2 rounded-md text-center cursor-pointer hover:bg-robo-darkGray transition-colors">
                  <div className="text-xs font-medium">Camera</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-robo-orange text-white p-2 rounded-lg transform rotate-12">
              <div className="text-xs font-semibold">Simulation en direct</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimulationSection;
