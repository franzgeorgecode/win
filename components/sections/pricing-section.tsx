"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Star, Shield, Award, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const pricingPlans = [
  {
    id: 'basic',
    name: 'Básico',
    description: 'Ideal para comenzar tu viaje en la programación',
    price: '0.50',
    currency: 'USD',
    period: 'mes',
    features: [
      'Acceso a rutas de aprendizaje básicas',
      'Editor de código en línea',
      'Proyectos prácticos básicos',
      'Asistente de IA (uso limitado)',
      'Certificados de finalización',
    ],
    notIncluded: [
      'Mentoría avanzada con IA',
      'Análisis de código en tiempo real',
      'Proyectos avanzados',
    ],
    cta: 'Comenzar Gratis',
    icon: <Star className="h-5 w-5" />,
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'Para estudiantes comprometidos con su desarrollo',
    price: '1.00',
    currency: 'USD',
    period: 'mes',
    features: [
      'Todo lo del plan Básico',
      'Acceso a todas las rutas de aprendizaje',
      'Asistente de IA ilimitado',
      'Proyectos avanzados con retroalimentación de IA',
      'Sesiones de mentoría con IA personalizada (ilimitadas)',
      'Análisis de código en tiempo real',
      'Certificados verificables',
    ],
    notIncluded: [
      'Mentoría IA especializada por industria',
    ],
    cta: 'Obtener Pro',
    popular: true,
    icon: <Zap className="h-5 w-5" />,
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'La experiencia completa para futuros profesionales',
    price: '1.50',
    currency: 'USD',
    period: 'mes',
    features: [
      'Todo lo del plan Pro',
      'Mentoría IA especializada por industria',
      'Análisis predictivo de carrera con IA',
      'Revisión de código avanzada con IA',
      'Preparación personalizada para entrevistas técnicas',
      'Proyectos a medida según tus objetivos',
      'Sistema de recomendación de empleo con IA',
      'Certificados premium verificables',
    ],
    cta: 'Obtener Premium',
    icon: <Award className="h-5 w-5" />,
  },
];

interface PricingCardProps {
  plan: typeof pricingPlans[0];
  isYearly: boolean;
}

const PricingCard = ({ plan, isYearly }: PricingCardProps) => {
  const getYearlyPrice = (price: string) => {
    const numPrice = parseFloat(price);
    const yearlyPrice = (numPrice * 10).toFixed(2);
    return yearlyPrice;
  };
  
  const price = isYearly ? getYearlyPrice(plan.price) : plan.price;
  const period = isYearly ? 'año' : plan.period;
  
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn(
        "glass-effect rounded-xl overflow-hidden border",
        plan.popular 
          ? "border-primary shadow-[0_0_20px_rgba(0,245,255,0.2)]" 
          : "border-gray-800"
      )}
    >
      {plan.popular && (
        <div className="bg-gradient-to-r from-primary to-secondary text-center py-1">
          <span className="text-xs font-medium text-black">Más Popular</span>
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold">{plan.name}</h3>
            <p className="text-sm text-gray-400">{plan.description}</p>
          </div>
          
          <div className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center",
            plan.popular 
              ? "bg-gradient-to-br from-primary/20 to-secondary/20 text-primary" 
              : "bg-gray-800 text-gray-400"
          )}>
            {plan.icon}
          </div>
        </div>
        
        <div className="mb-6">
          <div className="flex items-end">
            <span className="text-3xl font-bold">${price}</span>
            <span className="text-gray-400 text-sm ml-1">/{period}</span>
          </div>
          {isYearly && (
            <div className="flex items-center mt-2">
              <Shield className="h-3.5 w-3.5 text-primary mr-1.5" />
              <span className="text-xs text-primary">Ahorra 2 meses</span>
            </div>
          )}
        </div>
        
        <Button 
          className={cn(
            "w-full mb-6",
            plan.popular 
              ? "bg-gradient-to-r from-primary to-secondary text-black font-medium" 
              : "bg-gray-800 text-gray-200 hover:bg-gray-700"
          )}
          asChild
        >
          <a href="#signup">{plan.cta}</a>
        </Button>
        
        <div className="space-y-4">
          <p className="text-sm font-medium text-gray-300">Lo que incluye:</p>
          <ul className="space-y-2">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex text-sm">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
          
          {plan.notIncluded && (
            <>
              <p className="text-sm font-medium text-gray-400 pt-2">No incluido:</p>
              <ul className="space-y-2">
                {plan.notIncluded.map((feature, i) => (
                  <li key={i} className="flex text-sm">
                    <X className="h-4 w-4 text-gray-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-500">{feature}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);
  
  return (
    <section id="pricing" className="py-24 w-full">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Planes <span className="gradient-text">accesibles</span> para todos
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Invierte en tu futuro con planes diseñados para cada etapa de tu desarrollo. 
            Cancela en cualquier momento sin compromisos.
          </p>
          
          <div className="flex items-center justify-center mt-8">
            <span className={`mr-3 text-sm ${!isYearly ? 'text-white' : 'text-gray-400'}`}>Mensual</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={cn(
                "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
                isYearly ? "bg-primary" : "bg-gray-700"
              )}
            >
              <span
                className={cn(
                  "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
                  isYearly ? "translate-x-6" : "translate-x-1"
                )}
              />
            </button>
            <span className={`ml-3 text-sm ${isYearly ? 'text-white' : 'text-gray-400'}`}>Anual</span>
            <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary">Ahorra 20%</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} isYearly={isYearly} />
          ))}
        </div>
        
        <div className="mt-16 glass-effect rounded-lg p-6 max-w-3xl mx-auto border border-gray-800">
          <h3 className="text-xl font-bold mb-4 text-center">
            Comparativa con Bootcamps Tradicionales
          </h3>
          
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-300">Característica</th>
                  <th className="py-3 px-4 text-center text-sm font-medium text-primary">CodeMaster AI</th>
                  <th className="py-3 px-4 text-center text-sm font-medium text-gray-300">Bootcamps</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-4 text-sm text-gray-300">Costo Total</td>
                  <td className="py-3 px-4 text-center text-sm text-white">$1.50/mes (~$15/año)</td>
                  <td className="py-3 px-4 text-center text-sm text-gray-300">$3000 - $5000</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-4 text-sm text-gray-300">Flexibilidad horaria</td>
                  <td className="py-3 px-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  <td className="py-3 px-4 text-center"><X className="h-5 w-5 text-red-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-4 text-sm text-gray-300">Aprendizaje personalizado</td>
                  <td className="py-3 px-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  <td className="py-3 px-4 text-center"><X className="h-5 w-5 text-red-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-4 text-sm text-gray-300">Mentoría IA 24/7</td>
                  <td className="py-3 px-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  <td className="py-3 px-4 text-center text-sm text-gray-300">No disponible</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-4 text-sm text-gray-300">Tiempo para completar</td>
                  <td className="py-3 px-4 text-center text-sm text-white">A tu ritmo</td>
                  <td className="py-3 px-4 text-center text-sm text-gray-300">3-6 meses fijos</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-gray-300">Actualizaciones de contenido</td>
                  <td className="py-3 px-4 text-center text-sm text-white">Automáticas con IA</td>
                  <td className="py-3 px-4 text-center text-sm text-gray-300">Periódicas</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;