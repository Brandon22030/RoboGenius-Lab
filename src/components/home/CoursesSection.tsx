
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CircuitBoard, Cpu, Bot, Layers } from "lucide-react";

const courses = [
  {
    title: "Initiation à la robotique",
    description: "Découvrez les bases de la robotique et des premiers composants essentiels.",
    level: "Débutant",
    duration: "4 semaines",
    modules: 8,
    icon: CircuitBoard,
    color: "bg-robo-blue",
    progress: 0,
  },
  {
    title: "Programmation avec Arduino",
    description: "Apprenez à programmer des cartes Arduino pour vos projets robotiques.",
    level: "Intermédiaire",
    duration: "6 semaines",
    modules: 12,
    icon: Cpu,
    color: "bg-robo-orange",
    progress: 0,
  },
  {
    title: "Robotique avancée & IA",
    description: "Intégrez l'intelligence artificielle dans vos systèmes robotiques.",
    level: "Avancé",
    duration: "8 semaines",
    modules: 16,
    icon: Bot,
    color: "bg-robo-green",
    progress: 0,
  },
  {
    title: "Conception de robots autonomes",
    description: "Créez des robots capables de prendre des décisions indépendantes.",
    level: "Expert",
    duration: "10 semaines",
    modules: 20,
    icon: Layers,
    color: "bg-robo-darkGray",
    progress: 0,
  },
];

const CoursesSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-robo-darkGray mb-4">
              Nos parcours d'apprentissage
            </h2>
            <p className="text-robo-darkGray/80 max-w-xl">
              Des programmes structurés pour progresser à votre rythme, de la découverte à l'expertise en robotique.
            </p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0 border-robo-blue text-robo-blue hover:bg-robo-blue/5">
            Voir tous les parcours
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <Card key={index} className="tech-card">
              <CardHeader className={`${course.color} text-white p-4`}>
                <div className="flex justify-between items-center">
                  <course.icon className="h-8 w-8" />
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs font-medium">
                    {course.level}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <CardTitle className="text-xl font-semibold text-robo-darkGray mb-2">
                  {course.title}
                </CardTitle>
                <CardDescription className="text-robo-darkGray/80 mb-4">
                  {course.description}
                </CardDescription>
                <div className="flex items-center justify-between text-sm text-robo-darkGray/70">
                  <span>{course.duration}</span>
                  <span>{course.modules} modules</span>
                </div>
                {course.progress > 0 && (
                  <div className="mt-4">
                    <div className="progress-bar">
                      <div className="progress-value" style={{ width: `${course.progress}%` }}></div>
                    </div>
                    <div className="text-xs text-right mt-1 text-robo-darkGray/70">
                      {course.progress}% complété
                    </div>
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-robo-blue text-robo-blue hover:bg-robo-blue/5">
                  Voir le détail
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
