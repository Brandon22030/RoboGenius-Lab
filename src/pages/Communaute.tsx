
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Users, MessageSquare, Calendar, Award } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const Communaute = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-robo-darkGray mb-4">La communauté RoboGenius</h1>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">
            Connectez-vous avec d'autres passionnés de robotique, partagez vos projets, 
            posez vos questions et participez à des événements.
          </p>
        </div>

        <Tabs defaultValue="forums" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="forums" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" /> Forums
            </TabsTrigger>
            <TabsTrigger value="membres" className="flex items-center gap-2">
              <Users className="h-4 w-4" /> Membres
            </TabsTrigger>
            <TabsTrigger value="evenements" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" /> Événements
            </TabsTrigger>
            <TabsTrigger value="projets" className="flex items-center gap-2">
              <Award className="h-4 w-4" /> Projets
            </TabsTrigger>
          </TabsList>

          <TabsContent value="forums" className="space-y-4">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="divide-y divide-gray-200">
                <div className="flex items-start justify-between py-4">
                  <div>
                    <h3 className="text-lg font-semibold text-robo-darkGray hover:text-robo-blue transition-colors">
                      <a href="#">Débuter avec Arduino pour la robotique</a>
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Lancé par <span className="text-robo-blue">RobotMaster</span> · 23 réponses · Mis à jour il y a 2 heures
                    </p>
                  </div>
                  <div className="bg-robo-lightGray rounded-full px-3 py-1 text-xs font-medium">
                    Débutant
                  </div>
                </div>

                <div className="flex items-start justify-between py-4">
                  <div>
                    <h3 className="text-lg font-semibold text-robo-darkGray hover:text-robo-blue transition-colors">
                      <a href="#">Problème avec les capteurs ultrason HC-SR04</a>
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Lancé par <span className="text-robo-blue">RoboFan42</span> · 8 réponses · Mis à jour hier
                    </p>
                  </div>
                  <div className="bg-robo-blue/20 text-robo-blue rounded-full px-3 py-1 text-xs font-medium">
                    Dépannage
                  </div>
                </div>

                <div className="flex items-start justify-between py-4">
                  <div>
                    <h3 className="text-lg font-semibold text-robo-darkGray hover:text-robo-blue transition-colors">
                      <a href="#">Projet de robot suiveur de ligne - Partagez vos expériences</a>
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Lancé par <span className="text-robo-blue">MecatronicPro</span> · 42 réponses · Mis à jour il y a 3 jours
                    </p>
                  </div>
                  <div className="bg-robo-green/20 text-robo-green rounded-full px-3 py-1 text-xs font-medium">
                    Projets
                  </div>
                </div>

                <div className="flex items-start justify-between py-4">
                  <div>
                    <h3 className="text-lg font-semibold text-robo-darkGray hover:text-robo-blue transition-colors">
                      <a href="#">Intelligence artificielle appliquée à la robotique</a>
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Lancé par <span className="text-robo-blue">AIRobotExpert</span> · 17 réponses · Mis à jour la semaine dernière
                    </p>
                  </div>
                  <div className="bg-robo-orange/20 text-robo-orange rounded-full px-3 py-1 text-xs font-medium">
                    Avancé
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-between">
                <Button variant="outline">
                  Voir tous les sujets
                </Button>
                <Button className="bg-robo-blue text-white hover:bg-robo-blue/90">
                  Nouveau sujet
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="membres">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[...Array(6)].map((_, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-full bg-robo-blue/20 flex items-center justify-center text-robo-blue font-bold">
                      {["RM", "RF", "MP", "AE", "TK", "JD"][index]}
                    </div>
                    <div>
                      <h3 className="font-medium text-robo-darkGray">
                        {["RobotMaster", "RoboFan42", "MecatronicPro", "AIRobotExpert", "TechKid", "JohnDoe"][index]}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {["Mentor", "Membre actif", "Contributeur", "Expert", "Apprenant", "Débutant"][index]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex justify-center">
                <Button variant="outline">
                  Voir tous les membres
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="evenements">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="space-y-6">
                <div className="border-l-4 border-robo-blue pl-4">
                  <div className="flex items-center">
                    <span className="text-sm text-white bg-robo-blue px-2 py-0.5 rounded">Aujourd'hui</span>
                    <h3 className="font-semibold ml-2">Webinaire: Introduction à ROS</h3>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">19:00 - 20:30 | En ligne | Par Prof. Robert Smith</p>
                  <div className="mt-2">
                    <Button size="sm" variant="outline">S'inscrire</Button>
                  </div>
                </div>

                <div className="border-l-4 border-robo-green pl-4">
                  <div className="flex items-center">
                    <span className="text-sm text-white bg-robo-green px-2 py-0.5 rounded">Demain</span>
                    <h3 className="font-semibold ml-2">Atelier pratique: Construire son premier robot</h3>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">14:00 - 17:00 | Paris, FabLab | Par Marie Dubois</p>
                  <div className="mt-2">
                    <Button size="sm" variant="outline">S'inscrire</Button>
                  </div>
                </div>

                <div className="border-l-4 border-robo-orange pl-4">
                  <div className="flex items-center">
                    <span className="text-sm text-white bg-robo-orange px-2 py-0.5 rounded">Ce weekend</span>
                    <h3 className="font-semibold ml-2">Hackathon Robotique & IA</h3>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Samedi & Dimanche | Lyon, Campus Tech | Équipe RoboGenius</p>
                  <div className="mt-2">
                    <Button size="sm" variant="outline">S'inscrire</Button>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-between">
                <Button variant="outline">
                  Voir tous les événements
                </Button>
                <Button className="bg-robo-blue text-white hover:bg-robo-blue/90">
                  Proposer un événement
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="projets">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="h-48 bg-gradient-to-r from-robo-blue to-robo-green flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="font-bold text-xl">Robot Assistant</div>
                      <div className="text-sm opacity-80">Projet de bras robotique</div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-robo-blue">Par RobotMaster</span>
                      <span className="text-xs bg-robo-green/20 text-robo-green px-2 py-0.5 rounded">Complet</span>
                    </div>
                    <p className="text-sm text-gray-600">Un bras robotique contrôlé par Arduino capable de saisir et manipuler des objets.</p>
                    <div className="mt-4 flex justify-between">
                      <div className="text-xs text-gray-500">12 likes · 5 commentaires</div>
                      <Button size="sm" variant="outline">Voir le projet</Button>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="h-48 bg-gradient-to-r from-robo-orange to-robo-blue flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="font-bold text-xl">RoboExplorer</div>
                      <div className="text-sm opacity-80">Robot autonome</div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-robo-blue">Par MecatronicPro</span>
                      <span className="text-xs bg-robo-orange/20 text-robo-orange px-2 py-0.5 rounded">En cours</span>
                    </div>
                    <p className="text-sm text-gray-600">Robot d'exploration autonome avec caméra, GPS et capteurs environnementaux.</p>
                    <div className="mt-4 flex justify-between">
                      <div className="text-xs text-gray-500">8 likes · 3 commentaires</div>
                      <Button size="sm" variant="outline">Voir le projet</Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-center">
                <Button className="bg-robo-blue text-white hover:bg-robo-blue/90">
                  Partager votre projet
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Communaute;
