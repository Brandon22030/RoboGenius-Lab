
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-robo-darkGray text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-white text-robo-blue flex items-center justify-center">
                <span className="font-bold text-xl">R</span>
              </div>
              <span className="font-montserrat font-bold text-xl tracking-tight">
                <span className="text-white">Robo</span>
                <span className="text-robo-lightGray">Genius</span>
                <span className="text-robo-green">Lab</span>
              </span>
            </Link>
            <p className="text-sm text-robo-lightGray">
              Plateforme d'excellence en robotique offrant une expérience 
              d'apprentissage complète pour tous les niveaux, des débutants aux experts.
            </p>
          </div>

          {/* Links 1 */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-4">Parcours</h3>
            <ul className="space-y-2 text-robo-lightGray">
              <li>
                <Link to="/parcours/debutant" className="hover:text-robo-blue transition-colors">
                  Niveau Découverte
                </Link>
              </li>
              <li>
                <Link to="/parcours/intermediaire" className="hover:text-robo-blue transition-colors">
                  Niveau Fondations
                </Link>
              </li>
              <li>
                <Link to="/parcours/avance" className="hover:text-robo-blue transition-colors">
                  Niveau Avancé
                </Link>
              </li>
              <li>
                <Link to="/parcours/expert" className="hover:text-robo-blue transition-colors">
                  Niveau Expert
                </Link>
              </li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-4">Ressources</h3>
            <ul className="space-y-2 text-robo-lightGray">
              <li>
                <Link to="/simulateur" className="hover:text-robo-blue transition-colors">
                  Simulateur
                </Link>
              </li>
              <li>
                <Link to="/communaute" className="hover:text-robo-blue transition-colors">
                  Communauté
                </Link>
              </li>
              <li>
                <Link to="/ressources/documentation" className="hover:text-robo-blue transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/ressources/projets" className="hover:text-robo-blue transition-colors">
                  Projets
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-4">Restez informé</h3>
            <p className="text-sm text-robo-lightGray mb-4">
              Abonnez-vous à notre newsletter pour recevoir les dernières actualités et
              mises à jour de nos parcours.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Votre email"
                className="px-3 py-2 bg-robo-darkGray border border-robo-lightGray/30 rounded-md focus:outline-none focus:border-robo-blue text-white text-sm flex-1"
              />
              <Button className="bg-robo-blue hover:bg-robo-blue/90 text-white">
                OK
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-robo-lightGray/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-robo-lightGray">
            © {new Date().getFullYear()} RoboGenius Lab. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/mentions-legales" className="text-sm text-robo-lightGray hover:text-white">
              Mentions légales
            </Link>
            <Link to="/confidentialite" className="text-sm text-robo-lightGray hover:text-white">
              Politique de confidentialité
            </Link>
            <Link to="/contact" className="text-sm text-robo-lightGray hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
