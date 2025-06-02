"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  country: string;
  content: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alejandra Morales",
    role: "Frontend Developer",
    company: "Digital Solutions",
    country: "México",
    content: "CodeMaster AI transformó mi carrera. Pasé de no saber nada de programación a conseguir mi primer trabajo como desarrolladora en menos de 6 meses. La IA personalizada hizo toda la diferencia.",
    avatar: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=150",
    rating: 5
  },
  {
    id: 2,
    name: "Carlos Mendoza",
    role: "Data Scientist",
    company: "TechInnovate",
    country: "Colombia",
    content: "Como científico de datos, necesitaba actualizar mis habilidades en Python y aprender IA. La ruta personalizada me permitió enfocarme exactamente en lo que necesitaba sin perder tiempo.",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=150",
    rating: 5
  },
  {
    id: 3,
    name: "Luisa Fernández",
    role: "Full-Stack Developer",
    company: "StartupLab",
    country: "Argentina",
    content: "La metodología de CodeMaster AI es increíble. Aprendí más en 3 meses que en un año de universidad. Los proyectos prácticos y la retroalimentación en tiempo real hacen que todo sea más claro.",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=150",
    rating: 4
  },
  {
    id: 4,
    name: "Miguel Ángel Rojas",
    role: "Backend Developer",
    company: "Fintech Solutions",
    country: "Perú",
    content: "Lo que más me gustó fue la comunidad y el apoyo constante. La IA resuelve dudas técnicas al instante y los mentores humanos te guían en tu desarrollo profesional. ¡Increíble experiencia!",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=150",
    rating: 5
  },
  {
    id: 5,
    name: "Valentina Torres",
    role: "UX/UI Designer & Developer",
    company: "Creative Studio",
    country: "Chile",
    content: "Como diseñadora que quería aprender a programar, encontré en CodeMaster AI el balance perfecto. Los ejemplos visuales y la enseñanza paso a paso hicieron que el proceso fuera natural.",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=150",
    rating: 5
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  return (
    <section id="testimonials" className="py-24 w-full">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Lo que dicen nuestros <span className="gradient-text">estudiantes</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Miles de estudiantes latinoamericanos han transformado sus carreras 
            gracias a nuestra plataforma de educación en programación.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="glass-effect rounded-xl p-8 border border-gray-800">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/3 flex flex-col items-center">
                <div className="relative w-24 h-24 md:w-32 md:h-32 mb-4">
                  <div 
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-20 blur-md"
                    style={{ transform: 'scale(1.2)' }}
                  ></div>
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/30">
                    <Image
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 96px, 128px"
                    />
                  </div>
                </div>
                
                <h3 className="text-xl font-medium text-center">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-sm text-gray-400 text-center mb-2">
                  {testimonials[currentIndex].role}
                </p>
                <p className="text-xs text-gray-500 text-center mb-4">
                  {testimonials[currentIndex].company}, {testimonials[currentIndex].country}
                </p>
                
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "h-4 w-4",
                        i < testimonials[currentIndex].rating 
                          ? "text-yellow-400 fill-yellow-400" 
                          : "text-gray-600"
                      )}
                    />
                  ))}
                </div>
              </div>
              
              <div className="w-full md:w-2/3 flex flex-col justify-center">
                <div className="relative">
                  <div className="absolute -top-6 -left-6 text-6xl text-primary opacity-20">"</div>
                  <motion.p 
                    key={testimonials[currentIndex].id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-lg md:text-xl text-gray-200 italic relative z-10"
                  >
                    {testimonials[currentIndex].content}
                  </motion.p>
                  <div className="absolute -bottom-10 -right-6 text-6xl text-primary opacity-20">"</div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-12 space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="h-10 w-10 rounded-full border-gray-700 hover:border-primary hover:bg-primary/10"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              
              <div className="flex space-x-2 items-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={cn(
                      "h-2.5 rounded-full transition-all duration-300",
                      index === currentIndex 
                        ? "w-8 bg-primary" 
                        : "w-2.5 bg-gray-700 hover:bg-gray-600"
                    )}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="h-10 w-10 rounded-full border-gray-700 hover:border-primary hover:bg-primary/10"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-10 -left-10 w-20 h-20 rounded-full bg-primary/5 blur-xl"></div>
          <div className="absolute -bottom-10 -right-10 w-20 h-20 rounded-full bg-secondary/5 blur-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;