"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight, Send, User, LockKeyhole } from 'lucide-react';

const CtaSection = () => {
  return (
    <section id="signup" className="py-24 w-full relative overflow-hidden">
      {/* Background gradient elements */}
      <div 
        className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 20% 30%, rgba(0, 245, 255, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(255, 0, 229, 0.15) 0%, transparent 50%)',
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto glass-effect rounded-xl p-8 md:p-12 border border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ¡Comienza tu viaje <span className="gradient-text">hoy mismo</span>!
              </h2>
              
              <p className="text-gray-300 mb-8">
                Únete a miles de estudiantes latinoamericanos que están transformando sus carreras 
                con la plataforma más innovadora de educación en programación.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  'Acceso instantáneo a contenido de calidad',
                  'Primeros 7 días completamente gratis',
                  'Cancela en cualquier momento',
                  'Soporte personalizado desde el primer día'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="hidden md:block">
                <p className="text-sm text-gray-400 mb-4">
                  Más de 15.000 estudiantes ya confían en nosotros
                </p>
                
                <div className="flex space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div 
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-r from-primary/30 to-secondary/30 
                                flex items-center justify-center text-xs border border-gray-800"
                    >
                      <span>{i}K+</span>
                    </div>
                  ))}
                  <div className="flex items-center text-sm text-gray-400 ml-2">
                    estudiantes activos <br /> en Latinoamérica
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-effect rounded-lg p-6 border border-gray-800"
            >
              <h3 className="text-xl font-bold mb-6 text-center">
                Crea tu cuenta gratis
              </h3>
              
              <form className="space-y-4">
                <div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <User className="h-4 w-4 text-gray-500" />
                    </div>
                    <input 
                      type="text" 
                      placeholder="Nombre completo"
                      className="bg-gray-900 text-gray-300 rounded-md w-full py-2 pl-10 pr-3 border border-gray-800 
                                focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>
                
                <div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Send className="h-4 w-4 text-gray-500" />
                    </div>
                    <input 
                      type="email" 
                      placeholder="Correo electrónico"
                      className="bg-gray-900 text-gray-300 rounded-md w-full py-2 pl-10 pr-3 border border-gray-800 
                                focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>
                
                <div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <LockKeyhole className="h-4 w-4 text-gray-500" />
                    </div>
                    <input 
                      type="password" 
                      placeholder="Contraseña"
                      className="bg-gray-900 text-gray-300 rounded-md w-full py-2 pl-10 pr-3 border border-gray-800 
                                focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-gradient-to-r from-primary to-secondary text-black font-medium py-6"
                >
                  Comenzar Prueba Gratuita
                </Button>
                
                <p className="text-xs text-gray-500 text-center">
                  Al registrarte, aceptas nuestros <a href="#" className="text-primary hover:underline">Términos de Servicio</a> y 
                  <a href="#" className="text-primary hover:underline"> Política de Privacidad</a>.
                </p>
              </form>
              
              <div className="relative mt-8 pt-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-800"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="px-2 bg-gray-900 text-gray-400">O continúa con</span>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-2 gap-3">
                <button className="flex justify-center items-center py-2 px-4 border border-gray-800 rounded-md 
                                  hover:bg-gray-800 transition-colors duration-200">
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                    <path
                      d="M12.545 10.239v3.821h5.445c-0.712 2.315-2.647 3.972-5.445 3.972-3.332 0-6.033-2.701-6.033-6.033s2.701-6.032 6.033-6.032c1.498 0 2.866 0.549 3.921 1.453l2.814-2.814c-1.798-1.677-4.203-2.707-6.735-2.707-5.522 0-9.999 4.477-9.999 9.999s4.477 9.999 9.999 9.999c8.396 0 10.378-7.776 9.548-11.658h-9.548z"
                      fill="#FFF"
                    />
                  </svg>
                  Google
                </button>
                <button className="flex justify-center items-center py-2 px-4 border border-gray-800 rounded-md 
                                  hover:bg-gray-800 transition-colors duration-200">
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                    <path
                      d="M16.365 1.43c0 1.14-.8 2.044-1.91 2.044-1.11 0-2.041-.904-2.041-2.044 0-1.14.93-2.044 2.04-2.044s1.91.904 1.91 2.044zm-4.04 2.977l-3.574 16.667-.78.11c-.94 0-1.796-.81-1.796-2.256 0-.31.033-.618.1-.937l3.1-16.063c.298-1.96 2.023-3.45 4.001-3.45 1.305 0 2.44.62 3.09 1.58l.108.162-.666 3.345c-.303.309-.629.55-1.01.723l-.127.033c.595-.55.95-1.496.88-2.63l-.081-1.306-.54-1.17c-.21-.41-.68-.87-1.305-.87-1.01 0-1.999.99-2.315 2.34l-3.04 16.25-.09.431v.05c0 .55.42.831.870.831.42 0 .807-.27.917-.702l1.2-4.877h2.027l.3 2.094a5.32 5.32 0 01-.298 2.813c1.527 0 2.67-.75 3.04-1.621z"
                      fill="#FFF"
                    />
                  </svg>
                  GitHub
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;