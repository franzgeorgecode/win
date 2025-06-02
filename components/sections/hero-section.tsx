"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Bot, Zap } from 'lucide-react';
import CodeEditor from '@/components/ui/code-editor';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set initial dimensions
    handleResize();

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const calculateRotation = (x: number, y: number, windowWidth: number, windowHeight: number) => {
    // Return default rotation if window dimensions are not available (during SSR)
    if (windowWidth === 0 || windowHeight === 0) {
      return { rotateX: 0, rotateY: 0 };
    }
    
    // Calculate rotation based on mouse position
    // This creates a subtle 3D effect
    const rotateX = (y - windowHeight / 2) / 50;
    const rotateY = -(x - windowWidth / 2) / 50;
    
    return { rotateX, rotateY };
  };

  const rotation = calculateRotation(
    mousePosition.x,
    mousePosition.y,
    windowDimensions.width,
    windowDimensions.height
  );

  return (
    <section className="relative min-h-screen w-full flex items-center pt-16 overflow-hidden">
      {/* Background gradient effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 245, 255, 0.1) 0%, rgba(255, 0, 229, 0.05) 40%, transparent 70%)`,
          transition: 'background 0.3s ease',
        }}
      />
      
      <div className="container mx-auto px-4 py-20 md:py-32 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start space-y-6"
          >
            <div className="glass-effect py-2 px-4 rounded-full flex items-center space-x-2">
              <span className="text-primary text-xs md:text-sm font-medium flex items-center">
                <Sparkles size={16} className="mr-2" />
                Tecnología de punta para Latinoamérica
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Aprende a programar con{' '}
              <span className="gradient-text text-glow">IA</span>{' '}
              por solo{' '}
              <span className="gradient-text text-glow">$0.50 USD</span>/mes
            </h1>
            
            <p className="text-lg text-gray-300 md:max-w-lg">
              CodeMaster AI es la plataforma de educación en programación diseñada para Latinoamérica con tecnología de punta. Aprende a tu ritmo con retroalimentación personalizada.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                className="bg-gradient-to-r from-primary to-secondary text-black font-medium px-8 py-6 text-lg"
                asChild
              >
                <motion.a 
                  href="#pricing"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Comenzar Ahora <ArrowRight className="ml-2" />
                </motion.a>
              </Button>
              
              <Button 
                variant="outline" 
                className="border-primary hover:bg-primary/10 py-6 text-lg group"
                asChild
              >
                <motion.a 
                  href="#demo"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Bot className="mr-2 group-hover:text-primary transition-colors" />
                  Ver Demo
                </motion.a>
              </Button>
            </div>
            
            <div className="flex items-center space-x-4 pt-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-primary/80 to-secondary/80 flex items-center justify-center text-xs font-medium border-2 border-background">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-300">
                <span className="font-medium">+15.000</span> estudiantes activos
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              perspective: '1000px',
              transformStyle: 'preserve-3d',
            }}
            className="w-full h-full hidden lg:block"
          >
            <motion.div
              style={{
                transform: `rotateX(${rotation.rotateX}deg) rotateY(${rotation.rotateY}deg)`,
                transition: 'transform 0.2s ease-out',
              }}
              className={cn(
                "glass-effect rounded-lg p-4 border border-gray-800",
                "shadow-[0_0_15px_rgba(0,245,255,0.2)]"
              )}
            >
              <div className="bg-gray-900 rounded-md">
                <div className="flex items-center justify-between p-2 border-b border-gray-800">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs text-gray-400">Python - CodeMaster AI</div>
                  <div className="flex items-center">
                    <Zap size={14} className="text-primary" />
                  </div>
                </div>
                <CodeEditor language="python" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Floating gradient particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          initial={{
            x: Math.random() * (windowDimensions.width || 1000),
            y: Math.random() * (windowDimensions.height || 800),
            opacity: 0.3,
          }}
          animate={{
            x: [
              Math.random() * (windowDimensions.width || 1000),
              Math.random() * (windowDimensions.width || 1000),
              Math.random() * (windowDimensions.width || 1000),
            ],
            y: [
              Math.random() * (windowDimensions.height || 800),
              Math.random() * (windowDimensions.height || 800),
              Math.random() * (windowDimensions.height || 800),
            ],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 15 + Math.random() * 15,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            width: `${10 + Math.random() * 20}px`,
            height: `${10 + Math.random() * 20}px`,
            background: `radial-gradient(circle, ${
              Math.random() > 0.5 ? "rgba(0, 245, 255, 0.3)" : "rgba(255, 0, 229, 0.3)"
            } 0%, transparent 70%)`,
            filter: "blur(4px)",
          }}
        />
      ))}
    </section>
  );
};

export default HeroSection;