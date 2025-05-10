
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Progress } from "@/components/ui/progress";

const Parcours = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-robo-darkGray mb-4">Parcours d'Apprentissage</h1>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">
            Des programmes structurés pour acquérir toutes les compétences nécessaires en robotique,
            de l'introduction aux concepts avancés.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* Parcours Débutant */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-robo-lightGray">
            <div className="bg-blue-50 p-6 relative">
              <div className="absolute right-6 top-6 bg-blue-100 text-robo-blue py-1 px-3 rounded-full text-sm font-medium">
                Niveau 1
              </div>
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <span className="text-robo-blue font-bold text-2xl">1</span>
              </div>
              <h2 className="text-2xl font-bold text-robo-darkGray mb-2">Niveau Découverte</h2>
              <p className="text-gray-600 mb-4">
                Une introduction accessible au monde fascinant de la robotique, aucun prérequis nécessaire.
              </p>
              <div className="flex items-center text-sm mb-4">
                <span className="bg-white py-1 px-2 rounded text-gray-600 border border-gray-200 mr-2">5 modules</span>
                <span className="bg-white py-1 px-2 rounded text-gray-600 border border-gray-200">8-10 heures</span>
              </div>
              <div className="mb-2">
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">Progression</span>
                  <span>40%</span>
                </div>
                <Progress value={40} className="h-2" />
              </div>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Ce que vous apprendrez:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Les concepts fondamentaux de la robotique</li>
                  <li>• Les différents types de capteurs et leur fonctionnement</li>
                  <li>• Les bases de l'électricité pour les robots</li>
                  <li>• Comment assembler un robot simple</li>
                </ul>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-500">2 modules terminés sur 5</div>
                <Link to="/parcours/debutant">
                  <Button className="bg-robo-blue hover:bg-robo-blue/90">
                    Continuer le parcours
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Parcours Intermédiaire */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-robo-lightGray">
            <div className="bg-green-50 p-6 relative">
              <div className="absolute right-6 top-6 bg-green-100 text-robo-green py-1 px-3 rounded-full text-sm font-medium">
                Niveau 2
              </div>
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <span className="text-robo-green font-bold text-2xl">2</span>
              </div>
              <h2 className="text-2xl font-bold text-robo-darkGray mb-2">Niveau Fondations</h2>
              <p className="text-gray-600 mb-4">
                Approfondissez vos connaissances et développez des compétences pratiques en robotique.
              </p>
              <div className="flex items-center text-sm mb-4">
                <span className="bg-white py-1 px-2 rounded text-gray-600 border border-gray-200 mr-2">8 modules</span>
                <span className="bg-white py-1 px-2 rounded text-gray-600 border border-gray-200">20-25 heures</span>
              </div>
              <div className="mb-2">
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">Progression</span>
                  <span>15%</span>
                </div>
                <Progress value={15} className="h-2" />
              </div>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Ce que vous apprendrez:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• La programmation de base pour robots</li>
                  <li>• Le contrôle de moteurs et de servomoteurs</li>
                  <li>• La communication entre capteurs</li>
                  <li>• L'intégration de systèmes robotiques</li>
                </ul>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-500">1 module terminé sur 8</div>
                <Link to="/parcours/intermediaire">
                  <Button className="bg-robo-green hover:bg-robo-green/90">
                    Continuer le parcours
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Parcours Avancé */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-robo-lightGray">
            <div className="bg-orange-50 p-6 relative">
              <div className="absolute right-6 top-6 bg-orange-100 text-robo-orange py-1 px-3 rounded-full text-sm font-medium">
                Niveau 3
              </div>
              <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                <span className="text-robo-orange font-bold text-2xl">3</span>
              </div>
              <h2 className="text-2xl font-bold text-robo-darkGray mb-2">Niveau Avancé</h2>
              <p className="text-gray-600 mb-4">
                Maîtrisez des techniques avancées et construisez des robots complexes et autonomes.
              </p>
              <div className="flex items-center text-sm mb-4">
                <span className="bg-white py-1 px-2 rounded text-gray-600 border border-gray-200 mr-2">10 modules</span>
                <span className="bg-white py-1 px-2 rounded text-gray-600 border border-gray-200">30-40 heures</span>
              </div>
              <div className="mb-2">
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">Progression</span>
                  <span>0%</span>
                </div>
                <Progress value={0} className="h-2" />
              </div>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Ce que vous apprendrez:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Les algorithmes avancés de contrôle</li>
                  <li>• La vision par ordinateur pour robots</li>
                  <li>• L'intelligence artificielle appliquée</li>
                  <li>• La conception mécanique avancée</li>
                </ul>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-500">Terminez le niveau Fondations pour débloquer</div>
                <Link to="/parcours/avance">
                  <Button disabled className="bg-gray-300 text-gray-600">
                    Parcours verrouillé
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Parcours Expert */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-robo-lightGray opacity-75">
            <div className="bg-purple-50 p-6 relative">
              <div className="absolute right-6 top-6 bg-purple-100 text-purple-700 py-1 px-3 rounded-full text-sm font-medium">
                Niveau 4
              </div>
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <span className="text-purple-700 font-bold text-2xl">4</span>
              </div>
              <h2 className="text-2xl font-bold text-robo-darkGray mb-2">Niveau Expert</h2>
              <p className="text-gray-600 mb-4">
                Devenez un expert en robotique avec des projets de niveau professionnel et des technologies de pointe.
              </p>
              <div className="flex items-center text-sm mb-4">
                <span className="bg-white py-1 px-2 rounded text-gray-600 border border-gray-200 mr-2">8 modules</span>
                <span className="bg-white py-1 px-2 rounded text-gray-600 border border-gray-200">40+ heures</span>
              </div>
              <div className="mb-2">
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">Progression</span>
                  <span>0%</span>
                </div>
                <Progress value={0} className="h-2" />
              </div>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Ce que vous apprendrez:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Les systèmes robotiques distribués</li>
                  <li>• L'apprentissage automatique pour robots</li>
                  <li>• Les interfaces cerveau-machine</li>
                  <li>• La recherche et développement en robotique</li>
                </ul>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-500">Terminez le niveau Avancé pour débloquer</div>
                <Link to="/parcours/expert">
                  <Button disabled className="bg-gray-300 text-gray-600">
                    Parcours verrouillé
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Parcours;
