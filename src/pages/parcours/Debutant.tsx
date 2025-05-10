
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Play, Clock, BookOpen, CheckCircle, LockIcon } from "lucide-react";

const Debutant = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <span className="text-robo-blue font-bold text-xl">1</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-robo-darkGray">Niveau Découverte</h1>
              <p className="text-gray-600">Premiers pas dans le monde de la robotique</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-10 border border-robo-lightGray">
            <h2 className="text-xl font-bold mb-4 text-robo-darkGray">À propos de ce parcours</h2>
            <p className="text-gray-600 mb-6">
              Ce parcours est conçu pour les débutants absolus en robotique. Vous découvrirez les concepts fondamentaux,
              la terminologie essentielle et réaliserez vos premiers projets simples. Aucun prérequis technique n'est nécessaire.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-robo-blue mr-2" />
                <span className="text-gray-700">8-10 heures</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 text-robo-blue mr-2" />
                <span className="text-gray-700">5 modules</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-robo-blue mr-2" />
                <span className="text-gray-700">Certificat de réussite</span>
              </div>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-robo-darkGray">Modules</h2>
            
            <div className="space-y-6">
              {/* Module 1 - débloqué */}
              <Card className="border-l-4 border-l-robo-blue">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">Module 1: Introduction à la robotique</CardTitle>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Terminé</span>
                  </div>
                  <CardDescription>Histoire et applications de la robotique</CardDescription>
                </CardHeader>
                <CardContent>
                  <Progress value={100} className="h-2 mb-2" />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>5/5 leçons complétées</span>
                    <span>100%</span>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button className="bg-robo-blue hover:bg-robo-blue/90">
                    Revoir le module
                  </Button>
                </CardFooter>
              </Card>
              
              {/* Module 2 - débloqué et en cours */}
              <Card className="border-l-4 border-l-robo-blue">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">Module 2: Composants robotiques</CardTitle>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">En cours</span>
                  </div>
                  <CardDescription>Capteurs, moteurs et microcontrôleurs</CardDescription>
                </CardHeader>
                <CardContent>
                  <Progress value={60} className="h-2 mb-2" />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>3/5 leçons complétées</span>
                    <span>60%</span>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button className="bg-robo-blue hover:bg-robo-blue/90">
                    <Play className="h-4 w-4 mr-1" /> Continuer
                  </Button>
                </CardFooter>
              </Card>
              
              {/* Module 3 - débloqué mais pas commencé */}
              <Card className="border-l-4 border-l-robo-blue">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Module 3: Électricité pour la robotique</CardTitle>
                  <CardDescription>Circuits simples et alimentation des robots</CardDescription>
                </CardHeader>
                <CardContent>
                  <Progress value={0} className="h-2 mb-2" />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>0/4 leçons complétées</span>
                    <span>0%</span>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button className="bg-robo-blue hover:bg-robo-blue/90">
                    <Play className="h-4 w-4 mr-1" /> Commencer
                  </Button>
                </CardFooter>
              </Card>
              
              {/* Module 4 - verrouillé */}
              <Card className="border-l-4 border-l-gray-300 opacity-75">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg flex items-center">
                      <LockIcon className="h-4 w-4 mr-1 text-gray-500" />
                      Module 4: Premier montage robotique
                    </CardTitle>
                  </div>
                  <CardDescription>Assemblage d'un robot simple</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-gray-500 mb-2">
                    Terminez le Module 3 pour débloquer
                  </div>
                  <Progress value={0} className="h-2" />
                </CardContent>
                <CardFooter className="pt-0">
                  <Button disabled className="bg-gray-300 text-gray-600">
                    Verrouillé
                  </Button>
                </CardFooter>
              </Card>
              
              {/* Module 5 - verrouillé */}
              <Card className="border-l-4 border-l-gray-300 opacity-75">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg flex items-center">
                      <LockIcon className="h-4 w-4 mr-1 text-gray-500" />
                      Module 5: Projet final
                    </CardTitle>
                  </div>
                  <CardDescription>Construire un robot suiveur de ligne</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-gray-500 mb-2">
                    Terminez le Module 4 pour débloquer
                  </div>
                  <Progress value={0} className="h-2" />
                </CardContent>
                <CardFooter className="pt-0">
                  <Button disabled className="bg-gray-300 text-gray-600">
                    Verrouillé
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
          
          <div className="bg-robo-lightGray rounded-lg p-6 border border-gray-200">
            <h2 className="text-xl font-bold mb-4 text-robo-darkGray">Après ce parcours</h2>
            <p className="text-gray-600 mb-6">
              Une fois ce parcours terminé, vous pourrez poursuivre votre apprentissage avec le
              parcours "Niveau Fondations" qui vous permettra d'approfondir vos connaissances.
            </p>
            <div className="flex justify-between">
              <Button variant="outline">
                Voir tous les parcours
              </Button>
              <Button className="bg-robo-green hover:bg-robo-green/90">
                Niveau Fondations &rarr;
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Debutant;
