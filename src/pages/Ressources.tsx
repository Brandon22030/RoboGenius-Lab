
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Search, Download, Book, FileText, Video, Code } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Ressources = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-robo-darkGray mb-4">Centre de Ressources</h1>
          <p className="text-lg mb-8">
            Accédez à notre bibliothèque complète de ressources pédagogiques, guides techniques,
            et outils pour approfondir vos connaissances en robotique.
          </p>
          
          <div className="relative mb-10">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input 
              type="search" 
              className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-robo-blue focus:border-robo-blue" 
              placeholder="Rechercher des ressources..." 
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="w-10 h-10 rounded-lg bg-robo-blue/10 flex items-center justify-center mb-2">
                  <Book className="h-5 w-5 text-robo-blue" />
                </div>
                <h3 className="font-bold text-lg">Guides & Tutoriels</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Des guides pas à pas pour tous les niveaux.</p>
                <Button variant="outline" className="w-full">Explorer</Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="w-10 h-10 rounded-lg bg-robo-green/10 flex items-center justify-center mb-2">
                  <FileText className="h-5 w-5 text-robo-green" />
                </div>
                <h3 className="font-bold text-lg">Documentation Technique</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Spécifications, datasheets et ressources techniques.</p>
                <Button variant="outline" className="w-full">Consulter</Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="w-10 h-10 rounded-lg bg-robo-orange/10 flex items-center justify-center mb-2">
                  <Video className="h-5 w-5 text-robo-orange" />
                </div>
                <h3 className="font-bold text-lg">Vidéos Explicatives</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Cours vidéo, démos et conférences.</p>
                <Button variant="outline" className="w-full">Regarder</Button>
              </CardContent>
            </Card>
          </div>
          
          <h2 className="text-2xl font-bold text-robo-darkGray mb-4">Ressources populaires</h2>
          
          <div className="space-y-4 mb-10">
            {[
              {
                title: "Guide complet des capteurs pour la robotique",
                category: "Guide",
                downloads: "1.2k",
                icon: Book
              },
              {
                title: "Bibliothèque de code pour contrôleurs Arduino",
                category: "Code",
                downloads: "895",
                icon: Code
              },
              {
                title: "Fiches techniques des microcontrôleurs",
                category: "Documentation",
                downloads: "750",
                icon: FileText
              }
            ].map((resource, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-4 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center mr-4">
                    <resource.icon className="h-5 w-5 text-robo-darkGray" />
                  </div>
                  <div>
                    <h3 className="font-medium text-robo-darkGray">{resource.title}</h3>
                    <p className="text-sm text-gray-500">{resource.category} • {resource.downloads} téléchargements</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-robo-blue">
                  <Download className="h-4 w-4 mr-1" />
                  Télécharger
                </Button>
              </div>
            ))}
          </div>
          
          <div className="bg-robo-lightGray rounded-lg p-6 mb-6">
            <h2 className="text-xl font-bold text-robo-darkGray mb-2">Glossaire Robotique</h2>
            <p className="mb-4">Un dictionnaire complet des termes techniques en robotique.</p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mb-4">
              {["A", "B", "C", "D", "E", "F", "G", "H"].map((letter) => (
                <button 
                  key={letter}
                  className="py-2 px-3 bg-white rounded border border-gray-200 hover:bg-robo-blue hover:text-white transition-colors"
                >
                  {letter}
                </button>
              ))}
              <button className="py-2 px-3 bg-white rounded border border-gray-200 hover:bg-robo-blue hover:text-white transition-colors">
                ...
              </button>
            </div>
            
            <Button variant="outline" className="w-full sm:w-auto">
              Accéder au glossaire complet
            </Button>
          </div>
          
          <h2 className="text-2xl font-bold text-robo-darkGray mb-4">Ressources par niveau</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <Button variant="outline" className="justify-start py-6">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-robo-blue flex items-center justify-center mr-2 text-sm font-bold">1</div>
              Niveau Découverte
            </Button>
            <Button variant="outline" className="justify-start py-6">
              <div className="w-8 h-8 rounded-full bg-green-100 text-robo-green flex items-center justify-center mr-2 text-sm font-bold">2</div>
              Niveau Fondations
            </Button>
            <Button variant="outline" className="justify-start py-6">
              <div className="w-8 h-8 rounded-full bg-orange-100 text-robo-orange flex items-center justify-center mr-2 text-sm font-bold">3</div>
              Niveau Avancé
            </Button>
            <Button variant="outline" className="justify-start py-6">
              <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mr-2 text-sm font-bold">4</div>
              Niveau Expert
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Ressources;
