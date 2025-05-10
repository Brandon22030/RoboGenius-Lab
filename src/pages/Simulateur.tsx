
// In this file, we need to fix line 98 where the ">" character is causing a JSX error.
// We need to replace it with proper JSX syntax.

// Let me update the console output line by escaping the ">" character or using proper JSX syntax
// Replace:
//   > Prêt à exécuter la simulation...
// With:
//   {">"} Prêt à exécuter la simulation...
// or
//   &gt; Prêt à exécuter la simulation...

import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Play, Pause, RotateCcw } from "lucide-react";

const Simulateur = () => {
  const [isSimulating, setIsSimulating] = useState(false);
  const [speed, setSpeed] = useState([50]);
  
  const toggleSimulation = () => {
    setIsSimulating(!isSimulating);
  };
  
  const resetSimulation = () => {
    setIsSimulating(false);
    // Add reset logic here
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-robo-darkGray mb-2">Simulateur robotique</h1>
        <p className="text-robo-darkGray/80 mb-8">
          Expérimentez avec différentes configurations robotiques dans notre environnement de simulation.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Panneau de configuration */}
          <div className="col-span-1 bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="p-4 border-b border-gray-200">
              <h2 className="font-semibold text-lg text-robo-darkGray">Configuration</h2>
            </div>
            
            <Tabs defaultValue="robot" className="p-4">
              <TabsList className="w-full mb-4">
                <TabsTrigger value="robot" className="flex-1">Robot</TabsTrigger>
                <TabsTrigger value="environment" className="flex-1">Environnement</TabsTrigger>
                <TabsTrigger value="sensors" className="flex-1">Capteurs</TabsTrigger>
              </TabsList>
              
              <TabsContent value="robot" className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-robo-darkGray">Type de robot</label>
                  <select className="w-full mt-1 p-2 border border-gray-300 rounded-md">
                    <option>Bras robotique</option>
                    <option>Robot mobile</option>
                    <option>Robot humanoïde</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-robo-darkGray">Vitesse</label>
                  <Slider value={speed} onValueChange={setSpeed} className="mt-2" />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Lent</span>
                    <span>Rapide</span>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="environment" className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-robo-darkGray">Type de terrain</label>
                  <select className="w-full mt-1 p-2 border border-gray-300 rounded-md">
                    <option>Intérieur</option>
                    <option>Extérieur urbain</option>
                    <option>Terrain accidenté</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-robo-darkGray">Obstacles</label>
                  <div className="mt-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">Statiques</span>
                    </label>
                    <label className="flex items-center mt-1">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">Dynamiques</span>
                    </label>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="sensors" className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-robo-darkGray">Capteurs actifs</label>
                  <div className="mt-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" defaultChecked />
                      <span className="text-sm">Caméra</span>
                    </label>
                    <label className="flex items-center mt-1">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">Lidar</span>
                    </label>
                    <label className="flex items-center mt-1">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">Capteur de proximité</span>
                    </label>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Zone de simulation */}
          <div className="col-span-1 lg:col-span-2">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm h-full flex flex-col">
              <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                <h2 className="font-semibold text-lg text-robo-darkGray">Simulation</h2>
                <div className="flex space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={resetSimulation}
                  >
                    <RotateCcw className="h-4 w-4 mr-1" />
                    Réinitialiser
                  </Button>
                  <Button 
                    variant={isSimulating ? "destructive" : "default"}
                    size="sm"
                    onClick={toggleSimulation}
                  >
                    {isSimulating ? (
                      <>
                        <Pause className="h-4 w-4 mr-1" />
                        Pause
                      </>
                    ) : (
                      <>
                        <Play className="h-4 w-4 mr-1" />
                        Démarrer
                      </>
                    )}
                  </Button>
                </div>
              </div>
              
              <div className="flex-grow p-4 flex flex-col">
                <div className="flex-grow bg-gray-100 rounded-lg border border-dashed border-gray-300 flex items-center justify-center mb-4">
                  <div className="text-center">
                    <p className="text-gray-500">Zone de visualisation de simulation</p>
                    <p className="text-sm text-gray-400 mt-2">{isSimulating ? "Simulation en cours..." : "En attente de démarrage"}</p>
                  </div>
                </div>
                
                <div className="bg-black/90 rounded-lg p-3 h-24 overflow-y-auto text-white">
                  <div className="text-xs text-gray-500">Console:</div>
                  <div className="font-mono text-xs text-robo-darkGray mt-1">
                    {">"} Prêt à exécuter la simulation...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Simulateur;
