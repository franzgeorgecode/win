"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { AlertCircle, CheckCircle2, Server, Code, Database } from 'lucide-react';
import CodeEditor from '@/components/ui/code-editor';

const LiveCodingSection = () => {
  const [activeTab, setActiveTab] = useState('editor');
  const [codeStatus, setCodeStatus] = useState<'idle' | 'error' | 'success'>('idle');
  
  const runCode = () => {
    // Simulate code execution
    setCodeStatus('success');
    // Alternatively, to show an error: setCodeStatus('error');
  };
  
  return (
    <section id="demo" className="py-24 w-full bg-gradient-to-b from-background to-black/50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experimenta el <span className="gradient-text">poder</span> de la plataforma
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Prueba nuestro editor interactivo con retroalimentación instantánea y ejecución 
            de código en tiempo real.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="glass-effect rounded-lg border border-gray-800 overflow-hidden">
              <div className="border-b border-gray-800 p-3 flex items-center justify-between">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs text-gray-400">Editor de Código - CodeMaster AI</div>
                <div></div>
              </div>
              
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <div className="flex justify-between items-center border-b border-gray-800 px-4">
                  <TabsList className="bg-transparent">
                    <TabsTrigger 
                      value="editor" 
                      className="data-[state=active]:bg-gray-800 data-[state=active]:text-primary"
                    >
                      <Code className="mr-2 h-4 w-4" />
                      Editor
                    </TabsTrigger>
                    <TabsTrigger 
                      value="terminal" 
                      className="data-[state=active]:bg-gray-800 data-[state=active]:text-primary"
                    >
                      <Server className="mr-2 h-4 w-4" />
                      Terminal
                    </TabsTrigger>
                    <TabsTrigger 
                      value="database" 
                      className="data-[state=active]:bg-gray-800 data-[state=active]:text-primary"
                    >
                      <Database className="mr-2 h-4 w-4" />
                      Database
                    </TabsTrigger>
                  </TabsList>
                  
                  <div className="flex items-center space-x-2">
                    <Button 
                      onClick={runCode}
                      className="bg-primary hover:bg-primary/90 text-black"
                      size="sm"
                    >
                      Ejecutar Código
                    </Button>
                  </div>
                </div>
                
                <TabsContent value="editor" className="p-0 m-0">
                  <CodeEditor language="python" />
                </TabsContent>
                
                <TabsContent value="terminal" className="p-0 m-0">
                  <div className="bg-black text-gray-300 p-4 font-mono text-sm h-96 overflow-auto">
                    <div className="mb-2">
                      <span className="text-primary">$</span> python main.py
                    </div>
                    <div>
                      Iniciando aplicación...
                      <br />
                      Cargando módulos: pandas, numpy, matplotlib
                      <br />
                      Conectando a la base de datos...
                      <br />
                      Conexión exitosa
                      <br />
                      Ejecutando análisis de datos...
                      <br />
                      <br />
                      <span className="text-green-400">
                        Análisis completado con éxito en 1.24 segundos
                      </span>
                      <br />
                      <br />
                      <span className="text-primary">$</span> _
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="database" className="p-0 m-0">
                  <div className="bg-gray-900 text-gray-300 p-4 font-mono text-sm h-96 overflow-auto">
                    <div className="mb-4">
                      <h4 className="text-primary text-xs mb-2">Tablas Disponibles:</h4>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="p-2 bg-gray-800 rounded text-xs">usuarios</div>
                        <div className="p-2 bg-gray-800 rounded text-xs">cursos</div>
                        <div className="p-2 bg-gray-800 rounded text-xs">progreso</div>
                        <div className="p-2 bg-gray-800 rounded text-xs">ejercicios</div>
                        <div className="p-2 bg-gray-800 rounded text-xs">evaluaciones</div>
                        <div className="p-2 bg-gray-800 rounded text-xs">certificados</div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-primary text-xs mb-2">Consulta SQL Reciente:</h4>
                      <div className="bg-gray-800 p-2 rounded text-xs mb-2">
                        SELECT usuario.nombre, COUNT(progreso.ejercicio_id) as ejercicios_completados<br />
                        FROM usuarios<br />
                        JOIN progreso ON usuarios.id = progreso.usuario_id<br />
                        WHERE progreso.completado = TRUE<br />
                        GROUP BY usuario.id<br />
                        ORDER BY ejercicios_completados DESC<br />
                        LIMIT 10;
                      </div>
                      
                      <h4 className="text-primary text-xs mb-2">Resultados:</h4>
                      <div className="overflow-x-auto">
                        <table className="min-w-full text-xs">
                          <thead>
                            <tr className="bg-gray-800">
                              <th className="px-2 py-1 text-left">nombre</th>
                              <th className="px-2 py-1 text-left">ejercicios_completados</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr><td className="px-2 py-1">Ana Martínez</td><td className="px-2 py-1">148</td></tr>
                            <tr><td className="px-2 py-1">Carlos Gómez</td><td className="px-2 py-1">132</td></tr>
                            <tr><td className="px-2 py-1">Lucia Fernández</td><td className="px-2 py-1">127</td></tr>
                            <tr><td className="px-2 py-1">Miguel Álvarez</td><td className="px-2 py-1">115</td></tr>
                            <tr><td className="px-2 py-1">Daniela Torres</td><td className="px-2 py-1">109</td></tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
              
              {codeStatus !== 'idle' && (
                <div className={`p-3 flex items-start text-sm ${
                  codeStatus === 'error' ? 'bg-red-950/30 text-red-400' : 'bg-green-950/30 text-green-400'
                }`}>
                  {codeStatus === 'error' ? (
                    <>
                      <AlertCircle className="h-4 w-4 mr-2 mt-0.5" />
                      <div>
                        <p className="font-medium">Error en línea 8:</p>
                        <p>NameError: name 'panda' is not defined. ¿Quisiste decir 'pandas'?</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="h-4 w-4 mr-2 mt-0.5" />
                      <div>
                        <p className="font-medium">¡Código ejecutado correctamente!</p>
                        <p>Tiempo de ejecución: 0.24s • Memoria utilizada: 12.5MB</p>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="glass-effect rounded-lg border border-gray-800 p-6 h-full">
              <h3 className="text-xl font-bold mb-4 gradient-text">Asistente de IA</h3>
              
              <div className="space-y-4">
                <div className="glass-effect rounded-lg p-4">
                  <p className="text-sm text-gray-300 mb-2">
                    Puedo ver que estás trabajando con análisis de datos en Python. Aquí hay algunas sugerencias para mejorar tu código:
                  </p>
                  
                  <ul className="text-xs text-gray-400 space-y-2 list-disc pl-5">
                    <li>Considera usar <code className="text-primary">df.describe()</code> para obtener estadísticas descriptivas rápidas.</li>
                    <li>Para mejorar la visualización, prueba con <code className="text-primary">sns.pairplot(df)</code> para ver relaciones entre variables.</li>
                    <li>No olvides manejar los valores nulos con <code className="text-primary">df.isna().sum()</code> antes del análisis.</li>
                  </ul>
                </div>
                
                <div className="glass-effect rounded-lg p-4">
                  <p className="text-xs text-gray-400 mb-2">
                    <span className="text-primary font-medium">Recursos recomendados:</span>
                  </p>
                  
                  <ul className="text-xs space-y-1.5">
                    <li className="flex">
                      <span className="text-xs text-gray-400">📊</span>
                      <span className="ml-2 text-gray-300 hover:text-primary cursor-pointer">
                        Visualización Avanzada con Seaborn
                      </span>
                    </li>
                    <li className="flex">
                      <span className="text-xs text-gray-400">🔍</span>
                      <span className="ml-2 text-gray-300 hover:text-primary cursor-pointer">
                        Técnicas de Limpieza de Datos
                      </span>
                    </li>
                    <li className="flex">
                      <span className="text-xs text-gray-400">📈</span>
                      <span className="ml-2 text-gray-300 hover:text-primary cursor-pointer">
                        Análisis Exploratorio Completo
                      </span>
                    </li>
                  </ul>
                </div>
                
                <div className="glass-effect rounded-lg p-4">
                  <p className="text-xs text-gray-400 mb-2">
                    <span className="text-primary font-medium">¿Tienes alguna duda específica?</span>
                  </p>
                  
                  <div className="flex mt-2">
                    <input 
                      type="text"
                      placeholder="Escribe tu pregunta aquí..."
                      className="bg-gray-900 text-gray-300 text-xs rounded-l-md p-2 flex-1 border border-gray-800 focus:outline-none focus:border-primary"
                    />
                    <Button 
                      className="bg-primary hover:bg-primary/90 text-black rounded-l-none"
                      size="sm"
                    >
                      Enviar
                    </Button>
                  </div>
                </div>
                
                <div className="flex justify-center pt-4">
                  <Button variant="outline" className="text-xs w-full border-primary">
                    Abrir Chat Completo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveCodingSection;