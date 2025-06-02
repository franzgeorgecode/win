"use client";

import { motion } from 'framer-motion';
import { 
  Code, Brain, Zap, Globe, RotateCcw, Shield, Bot, 
  Lightbulb, Smartphone, Sparkles, Laptop
} from 'lucide-react';
import { cn } from '@/lib/utils';

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  index,
  className
}: { 
  icon: React.ElementType, 
  title: string, 
  description: string,
  index: number,
  className?: string
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={cn(
        "glass-effect p-6 rounded-lg border border-gray-800",
        "transform-gpu transition-all duration-300 hover:-translate-y-2",
        "hover:shadow-[0_10px_20px_rgba(0,245,255,0.15)]",
        className
      )}
    >
      <div className="flex flex-col space-y-3">
        <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-lg font-medium text-gray-200">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "IA Avanzada",
      description: "Algoritmos inteligentes que analizan tu código y ofrecen retroalimentación personalizada."
    },
    {
      icon: Globe,
      title: "Enfoque Latinoamericano",
      description: "Contenido optimizado para estudiantes latinoamericanos con ejemplos culturalmente relevantes."
    },
    {
      icon: Code,
      title: "Editor Interactivo",
      description: "Editor de código en tiempo real con resaltado de sintaxis y sugerencias inteligentes."
    },
    {
      icon: Zap,
      title: "Aprendizaje Acelerado",
      description: "Metodología que te permite aprender hasta 3 veces más rápido que con métodos tradicionales."
    },
    {
      icon: RotateCcw,
      title: "Modo Sin Conexión",
      description: "Accede a tus lecciones y completa ejercicios incluso cuando no tienes internet."
    },
    {
      icon: Lightbulb,
      title: "Proyectos Prácticos",
      description: "Aplica lo aprendido en proyectos reales con retroalimentación instantánea."
    },
    {
      icon: Smartphone,
      title: "Multiplataforma",
      description: "Accede desde cualquier dispositivo y continúa donde lo dejaste."
    },
    {
      icon: Shield,
      title: "Certificaciones",
      description: "Obtén certificados verificables reconocidos por empresas tecnológicas."
    },
    {
      icon: Bot,
      title: "Asistente Personalizado",
      description: "Tu asistente de IA disponible 24/7 para resolver dudas y ofrecer guía."
    },
    {
      icon: Sparkles,
      title: "Gamificación",
      description: "Sistema de puntos, logros y niveles que mantienen tu motivación al máximo."
    },
    {
      icon: Laptop,
      title: "Entorno Real",
      description: "Practica en un entorno que simula condiciones reales de trabajo."
    }
  ];

  return (
    <section className="py-24 w-full">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Una plataforma <span className="gradient-text">revolucionaria</span> para aprender a programar
          </h2>
          <p className="text-gray-300 text-lg">
            CodeMaster AI combina lo último en inteligencia artificial con métodos pedagógicos avanzados 
            para ofrecerte la mejor experiencia de aprendizaje.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;