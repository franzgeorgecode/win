'use client';

import { motion } from 'framer-motion';
import { 
  BookOpen, Star, Zap, Trophy, 
  CheckCircle2, Timer, Brain
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card } from '@/components/ui/card';

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-2">
          ¡Bienvenido de vuelta, <span className="gradient-text">Alex</span>!
        </h1>
        <p className="text-gray-400">
          Continúa tu viaje de aprendizaje donde lo dejaste
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: 'Racha Actual',
            value: '7 días',
            icon: Zap,
            color: 'text-yellow-500',
          },
          {
            title: 'XP Total',
            value: '2,450',
            icon: Star,
            color: 'text-purple-500',
          },
          {
            title: 'Ejercicios',
            value: '45/100',
            icon: CheckCircle2,
            color: 'text-green-500',
          },
          {
            title: 'Tiempo',
            value: '24h 35m',
            icon: Timer,
            color: 'text-blue-500',
          },
        ].map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="glass-effect p-6 border-gray-800">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">{stat.title}</p>
                  <p className="text-2xl font-bold mt-1">{stat.value}</p>
                </div>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Current Progress */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        {/* Current Course */}
        <Card className="glass-effect p-6 border-gray-800">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold">Curso Actual</h3>
              <p className="text-gray-400">Python para Ciencia de Datos</p>
            </div>
            <Brain className="h-6 w-6 text-primary" />
          </div>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Progreso</span>
                <span>45%</span>
              </div>
              <Progress value={45} />
            </div>
            
            <Button className="w-full bg-gradient-to-r from-primary to-secondary text-black font-medium">
              Continuar Aprendiendo
            </Button>
          </div>
        </Card>

        {/* Recent Achievements */}
        <Card className="glass-effect p-6 border-gray-800">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Logros Recientes</h3>
            <Trophy className="h-6 w-6 text-yellow-500" />
          </div>
          
          <div className="space-y-4">
            {[
              {
                title: 'Primera Solución',
                description: 'Completaste tu primer ejercicio',
                icon: CheckCircle2,
                date: 'Hace 2 días',
              },
              {
                title: 'Racha de 7 días',
                description: 'Mantuviste tu racha por una semana',
                icon: Zap,
                date: 'Hace 3 días',
              },
            ].map((achievement, index) => (
              <div
                key={achievement.title}
                className="flex items-start gap-3 p-3 rounded-lg bg-gray-800/50"
              >
                <achievement.icon className="h-5 w-5 text-yellow-500 mt-0.5" />
                <div className="flex-1">
                  <p className="font-medium">{achievement.title}</p>
                  <p className="text-sm text-gray-400">{achievement.description}</p>
                </div>
                <span className="text-xs text-gray-500">{achievement.date}</span>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* Recommended Courses */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Cursos Recomendados</h2>
          <Button variant="outline" size="sm">
            Ver todos
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'JavaScript Moderno',
              description: 'Domina ES2024+ y las últimas características',
              progress: 0,
              duration: '4h 30m',
              level: 'Intermedio',
            },
            {
              title: 'React Avanzado',
              description: 'Patrones de diseño y mejores prácticas',
              progress: 0,
              duration: '6h 15m',
              level: 'Avanzado',
            },
            {
              title: 'SQL para Análisis',
              description: 'Consultas avanzadas y optimización',
              progress: 0,
              duration: '3h 45m',
              level: 'Intermedio',
            },
          ].map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="glass-effect p-6 border-gray-800">
                <BookOpen className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{course.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span>{course.duration}</span>
                  <span>{course.level}</span>
                </div>

                <Button className="w-full" variant="outline">
                  Comenzar Curso
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}