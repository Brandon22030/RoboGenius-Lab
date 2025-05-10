
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation d'inscription
    console.log('Tentative d\'inscription');
    // Ici nous ajouterions la logique d'inscription réelle
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex min-h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <div className="flex justify-center mb-8">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-robo-blue text-white flex items-center justify-center">
                <span className="font-bold text-xl">R</span>
              </div>
              <span className="font-montserrat font-bold text-xl tracking-tight">
                <span className="text-robo-blue">Robo</span>
                <span className="text-robo-darkGray">Genius</span>
                <span className="text-robo-green">Lab</span>
              </span>
            </Link>
          </div>
          <div className="bg-white p-8 shadow-lg rounded-lg border border-gray-200">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Créer un compte</h1>
              <p className="text-sm text-gray-600">
                Rejoignez RoboGenius Lab pour commencer votre parcours en robotique
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label htmlFor="firstname">Prénom</Label>
                  <Input
                    id="firstname"
                    type="text"
                    required
                  />
                </div>
                
                <div className="space-y-1">
                  <Label htmlFor="lastname">Nom</Label>
                  <Input
                    id="lastname"
                    type="text"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1">
                <Label htmlFor="email">Adresse e-mail</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="vous@exemple.fr"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="space-y-1">
                <Label htmlFor="password">Mot de passe</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Au moins 8 caractères, avec une majuscule et un chiffre
                </p>
              </div>

              <div className="flex items-start">
                <Checkbox id="terms" className="mt-1" />
                <Label 
                  htmlFor="terms" 
                  className="ml-2 text-sm text-gray-600"
                >
                  J'accepte les <Link to="/terms" className="text-robo-blue hover:underline">conditions d'utilisation</Link> et la <Link to="/privacy" className="text-robo-blue hover:underline">politique de confidentialité</Link>
                </Label>
              </div>

              <Button type="submit" className="w-full bg-robo-blue hover:bg-robo-blue/90">
                Créer un compte
              </Button>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 text-gray-500">Ou s'inscrire avec</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <Button variant="outline" className="w-full">
                  Google
                </Button>
                <Button variant="outline" className="w-full">
                  GitHub
                </Button>
              </div>
            </div>

            <div className="mt-6 text-center text-sm">
              <span className="text-gray-600">Déjà un compte? </span>
              <Link to="/auth/login" className="text-robo-blue font-medium hover:underline">
                Se connecter
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
