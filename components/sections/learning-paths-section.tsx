"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Laptop, Server, Database, Code2, 
  ChevronRight, Check, Timer
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface LearningPath {
  id: string;
  title: string;
  icon: React.ElementType;
  description: string;
  technologies: string[];
  duration: string;
  difficulty: 'Principiante' | 'Intermedio' | 'Avanzado';
  modules: {
    title: string;
    topics: string[];
  }[];
}

const LearningPathCard = ({ 
  path, 
  isSelected, 
  onClick 
}: { 
  path: LearningPath; 
  isSelected: boolean; 
  onClick: () => void;
}) => {
  const Icon = path.icon;
  
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "glass-effect p-6 rounded-lg cursor-pointer transition-all duration-300",
        isSelected ? 
          "border-2 border-primary shadow-[0_0_15px_rgba(0,245,255,0.3)]" : 
          "border border-gray-800 hover:border-gray-700"
      )}
      onClick={onClick}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className={cn(
            "w-10 h-10 rounded-lg flex items-center justify-center",
            "bg-gradient-to-r from-primary/30 to-secondary/30"
          )}>
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <h3 className="ml-3 font-medium text-lg">{path.title}</h3>
        </div>
        
        <div className={cn(
          "w-6 h-6 rounded-full flex items-center justify-center border",
          isSelected ? 
            "border-primary bg-primary/20" : 
            "border-gray-700"
        )}>
          {isSelected && <Check className="h-3.5 w-3.5 text-primary" />}
        </div>
      </div>
      
      <p className="text-sm text-gray-400 mb-4">{path.description}</p>
      
      <div className="flex items-center text-xs text-gray-500 mb-4">
        <Timer className="h-3.5 w-3.5 mr-1.5" />
        <span>{path.duration} • {path.difficulty}</span>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {path.technologies.slice(0, 3).map((tech, i) => (
          <span 
            key={i} 
            className="px-2 py-1 rounded-full text-xs bg-gray-800 text-gray-300"
          >
            {tech}
          </span>
        ))}
        {path.technologies.length > 3 && (
          <span className="px-2 py-1 rounded-full text-xs bg-gray-800 text-gray-300">
            +{path.technologies.length - 3}
          </span>
        )}
      </div>
    </motion.div>
  );
};

const LearningPathsSection = () => {
  const learningPaths: LearningPath[] = [
    {
      id: "frontend",
      title: "Frontend Developer",
      icon: Laptop,
      description: "Crea interfaces interactivas y experiencias de usuario cautivadoras con las últimas tecnologías web.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "TypeScript"],
      duration: "4 meses",
      difficulty: "Principiante",
      modules: [
        {
          title: "Fundamentos Web",
          topics: ["HTML5 Semántico", "CSS Moderno", "Responsive Design"]
        },
        {
          title: "JavaScript Avanzado",
          topics: ["ES2024+", "DOM Manipulation", "Asynchronous JS"]
        },
        {
          title: "React Moderno",
          topics: ["Hooks", "Context API", "Server Components"]
        },
        {
          title: "TypeScript para Frontend",
          topics: ["Tipos Básicos", "Interfaces", "Genéricos"]
        }
      ]
    },
    {
      id: "backend",
      title: "Backend Developer",
      icon: Server,
      description: "Desarrolla APIs robustas y servicios escalables para potenciar aplicaciones modernas.",
      technologies: ["Python", "SQL", "APIs", "Cloud", "Seguridad"],
      duration: "5 meses",
      difficulty: "Intermedio",
      modules: [
        {
          title: "Python Completo",
          topics: ["Sintaxis Avanzada", "Estructuras de Datos", "OOP"]
        },
        {
          title: "Bases de Datos",
          topics: ["SQL", "PostgreSQL", "Query Optimization"]
        },
        {
          title: "APIs y Microservicios",
          topics: ["REST", "GraphQL", "Arquitectura"]
        },
        {
          title: "Despliegue y Cloud",
          topics: ["CI/CD", "Containers", "AWS/Azure"]
        }
      ]
    },
    {
      id: "python",
      title: "Python Developer",
      icon: Code2,
      description: "Domina Python para ciencia de datos, IA, automatización y desarrollo de aplicaciones.",
      technologies: ["Python", "Data Science", "AI/ML", "Automation"],
      duration: "6 meses",
      difficulty: "Intermedio",
      modules: [
        {
          title: "Fundamentos de Python",
          topics: ["Sintaxis", "Estructuras de Datos", "Funciones"]
        },
        {
          title: "Ciencia de Datos",
          topics: ["Pandas", "NumPy", "Visualización"]
        },
        {
          title: "Inteligencia Artificial",
          topics: ["Machine Learning", "Deep Learning", "NLP"]
        },
        {
          title: "Automatización",
          topics: ["Scripts", "Web Scraping", "Bots"]
        }
      ]
    },
    {
      id: "fullstack",
      title: "Full-Stack Developer",
      icon: Database,
      description: "Conviértete en un desarrollador completo dominando tanto el frontend como el backend.",
      technologies: ["HTML/CSS", "JS/TS", "React", "Python", "SQL", "Cloud"],
      duration: "8 meses",
      difficulty: "Avanzado",
      modules: [
        {
          title: "Frontend Completo",
          topics: ["HTML/CSS", "JavaScript", "React", "TypeScript"]
        },
        {
          title: "Backend Robusto",
          topics: ["Python", "APIs", "Bases de Datos"]
        },
        {
          title: "Integración y Despliegue",
          topics: ["Full-Stack Apps", "Cloud", "DevOps"]
        },
        {
          title: "Proyecto Final",
          topics: ["Aplicación Completa", "Trabajo en Equipo", "Presentación"]
        }
      ]
    }
  ];

  const [selectedPath, setSelectedPath] = useState<LearningPath>(learningPaths[0]);

  return (
    <section id="learning-paths" className="py-24 w-full">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Rutas de aprendizaje <span className="gradient-text">personalizadas</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Selecciona la ruta que mejor se adapte a tus objetivos profesionales 
            y avanza a tu propio ritmo con el apoyo constante de nuestra IA.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {learningPaths.map((path) => (
                <LearningPathCard
                  key={path.id}
                  path={path}
                  isSelected={selectedPath.id === path.id}
                  onClick={() => setSelectedPath(path)}
                />
              ))}
            </div>
          </div>
          
          <motion.div 
            key={selectedPath.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 glass-effect rounded-lg p-6 border border-gray-800"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">
                {selectedPath.title}
              </h3>
              <p className="text-gray-400">
                {selectedPath.description}
              </p>
            </div>
            
            <div className="mb-8">
              <h4 className="text-lg font-medium mb-4 flex items-center">
                <span className="gradient-text">Módulos del curso</span>
              </h4>
              
              <div className="space-y-6">
                {selectedPath.modules.map((module, index) => (
                  <div key={index} className="border-l-2 border-gray-800 pl-4 py-1">
                    <h5 className="text-base font-medium text-gray-200 mb-2">
                      Módulo {index + 1}: {module.title}
                    </h5>
                    <ul className="space-y-2">
                      {module.topics.map((topic, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-400">
                          <ChevronRight className="h-4 w-4 text-primary mr-2 mt-0.5" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-gradient-to-r from-primary to-secondary text-black font-medium"
              >
                Comenzar esta ruta
              </Button>
              <Button variant="outline" className="border-primary">
                Ver detalles completos
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LearningPathsSection;