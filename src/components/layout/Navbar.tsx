
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="border-b border-robo-lightGray sticky top-0 bg-white/95 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-robo-darkGray hover:text-robo-blue transition-colors bg-transparent hover:bg-transparent focus:bg-transparent">Parcours</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-robo-blue/50 to-robo-blue p-6 no-underline outline-none focus:shadow-md"
                            to="/parcours"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium text-white">
                              Tous les parcours
                            </div>
                            <p className="text-sm leading-tight text-white/90">
                              Explorez tous nos parcours d'apprentissage en robotique
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/parcours/debutant" title="Niveau Découverte">
                        Pour débutants absolus en robotique
                      </ListItem>
                      <ListItem href="/parcours/intermediaire" title="Niveau Fondations">
                        Approfondissez vos compétences
                      </ListItem>
                      <ListItem href="/parcours/avance" title="Niveau Avancé">
                        Pour utilisateurs expérimentés
                      </ListItem>
                      <ListItem href="/parcours/expert" title="Niveau Expert">
                        Maîtrisez les technologies de pointe
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <Link to="/simulateur" className="text-robo-darkGray hover:text-robo-blue transition-colors">
              Simulateur
            </Link>
            <Link to="/communaute" className="text-robo-darkGray hover:text-robo-blue transition-colors">
              Communauté
            </Link>
            <Link to="/ressources" className="text-robo-darkGray hover:text-robo-blue transition-colors">
              Ressources
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="text-robo-blue border-robo-blue hover:bg-robo-blue/5"
              onClick={() => navigate("/auth/login")}
            >
              Se connecter
            </Button>
            <Button 
              className="bg-robo-blue hover:bg-robo-blue/90 text-white animated-btn"
              onClick={() => navigate("/auth/register")}
            >
              S'inscrire
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-robo-darkGray focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-robo-lightGray">
          <div className="px-4 py-2 space-y-1">
            <Link
              to="/parcours"
              className="block py-2 text-robo-darkGray hover:text-robo-blue transition-colors"
              onClick={toggleMobileMenu}
            >
              Parcours
            </Link>
            <div className="pl-4 border-l border-robo-lightGray space-y-1 my-1">
              <Link
                to="/parcours/debutant"
                className="block py-1 text-sm text-robo-darkGray hover:text-robo-blue transition-colors"
                onClick={toggleMobileMenu}
              >
                Niveau Découverte
              </Link>
              <Link
                to="/parcours/intermediaire"
                className="block py-1 text-sm text-robo-darkGray hover:text-robo-blue transition-colors"
                onClick={toggleMobileMenu}
              >
                Niveau Fondations
              </Link>
              <Link
                to="/parcours/avance"
                className="block py-1 text-sm text-robo-darkGray hover:text-robo-blue transition-colors"
                onClick={toggleMobileMenu}
              >
                Niveau Avancé
              </Link>
              <Link
                to="/parcours/expert"
                className="block py-1 text-sm text-robo-darkGray hover:text-robo-blue transition-colors"
                onClick={toggleMobileMenu}
              >
                Niveau Expert
              </Link>
            </div>
            <Link
              to="/simulateur"
              className="block py-2 text-robo-darkGray hover:text-robo-blue transition-colors"
              onClick={toggleMobileMenu}
            >
              Simulateur
            </Link>
            <Link
              to="/communaute"
              className="block py-2 text-robo-darkGray hover:text-robo-blue transition-colors"
              onClick={toggleMobileMenu}
            >
              Communauté
            </Link>
            <Link
              to="/ressources"
              className="block py-2 text-robo-darkGray hover:text-robo-blue transition-colors"
              onClick={toggleMobileMenu}
            >
              Ressources
            </Link>
            <div className="pt-4 space-y-2">
              <Button
                variant="outline"
                className="w-full text-robo-blue border-robo-blue hover:bg-robo-blue/5"
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate("/auth/login");
                }}
              >
                Se connecter
              </Button>
              <Button 
                className="w-full bg-robo-blue hover:bg-robo-blue/90 text-white"
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate("/auth/register");
                }}
              >
                S'inscrire
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;
