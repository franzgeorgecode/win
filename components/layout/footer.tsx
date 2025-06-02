import Link from 'next/link';
import { Code2, Heart, Github, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full glass-effect mt-12 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Code2 size={24} className="text-primary" />
              <span className="text-lg font-bold gradient-text">CodeMaster AI</span>
            </div>
            <p className="text-sm text-gray-400 max-w-xs">
              Plataforma de educación en programación impulsada por IA, diseñada para Latinoamérica.
            </p>
            <div className="flex space-x-4 pt-2">
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Github size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-gray-200 font-medium mb-4">Plataforma</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-primary transition-colors">
                  Rutas de aprendizaje
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-primary transition-colors">
                  Precios
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-primary transition-colors">
                  Para empresas
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-primary transition-colors">
                  Certificaciones
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-200 font-medium mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-primary transition-colors">
                  Documentación
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-primary transition-colors">
                  Comunidad
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-primary transition-colors">
                  Ayuda
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-200 font-medium mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-primary transition-colors">
                  Términos de servicio
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-primary transition-colors">
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-primary transition-colors">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} CodeMaster AI. Todos los derechos reservados.
          </p>
          <p className="text-sm text-gray-400 flex items-center mt-4 md:mt-0">
            Hecho con <Heart size={14} className="mx-1 text-secondary" /> en Latinoamérica
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;