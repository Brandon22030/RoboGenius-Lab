
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center bg-robo-lightGray">
        <div className="text-center max-w-lg p-8">
          <div className="inline-block p-6 bg-white rounded-full shadow-md mb-6">
            <div className="text-8xl font-bold bg-gradient-to-br from-robo-blue to-robo-green bg-clip-text text-transparent">
              404
            </div>
          </div>
          <h1 className="text-3xl font-bold text-robo-darkGray mb-4">Page introuvable</h1>
          <p className="text-lg text-robo-darkGray/80 mb-8">
            La page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <Button asChild size="lg" className="bg-robo-blue hover:bg-robo-blue/90 text-white">
            <Link to="/">Retourner à l'accueil</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
