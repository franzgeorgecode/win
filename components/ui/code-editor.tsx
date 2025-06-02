"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, Pause, Rotate3D as Rotate } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CodeEditorProps {
  language?: 'python' | 'javascript' | 'html' | 'css' | 'typescript' | 'sql';
}

const CodeEditor = ({ language = 'python' }: CodeEditorProps) => {
  const [code, setCode] = useState<string>('');
  const [codeOutput, setCodeOutput] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(true);
  const [currentLine, setCurrentLine] = useState<number>(0);

  const pythonCode = `# Análisis de datos con Python
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Cargar dataset
df = pd.read_csv('datos_latam.csv')

# Explorar datos
print(f"Filas: {df.shape[0]}, Columnas: {df.shape[1]}")
print(df.head())

# Visualizar distribución
plt.figure(figsize=(10, 6))
sns.histplot(df['ingresos'], kde=True)
plt.title('Distribución de Ingresos en Latinoamérica')
plt.xlabel('Ingresos (USD)')
plt.show()

# Análisis por país
paises = df.groupby('pais')['ingresos'].mean()
paises.sort_values(ascending=False).plot(kind='bar')
`;

  const javascriptCode = `// Aplicación web con JavaScript moderno
import { useState, useEffect } from 'react';

// Componente principal
function App() {
  const [datos, setDatos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const respuesta = await fetch('https://api.ejemplo.com/datos');
        const datos = await respuesta.json();
        setDatos(datos);
        setCargando(false);
      } catch (error) {
        console.error('Error al cargar datos:', error);
        setCargando(false);
      }
    };

    obtenerDatos();
  }, []);

  return (
    <div className="contenedor">
      <h1>Datos de Latinoamérica</h1>
      {cargando ? (
        <p>Cargando datos...</p>
      ) : (
        <ul>
          {datos.map(item => (
            <li key={item.id}>{item.nombre}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
`;

  const sampleCodes = {
    python: pythonCode,
    javascript: javascriptCode,
    html: '<div class="container">\n  <h1>Hola, mundo!</h1>\n  <p>Bienvenido a CodeMaster AI</p>\n</div>',
    css: '.container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}',
    typescript: 'interface Usuario {\n  id: number;\n  nombre: string;\n  edad?: number;\n}\n\nconst getUsuario = async (id: number): Promise<Usuario> => {\n  const respuesta = await fetch(`/api/usuarios/${id}`);\n  return respuesta.json();\n};',
    sql: 'SELECT \n  pais.nombre,\n  COUNT(estudiante.id) as total_estudiantes,\n  AVG(estudiante.edad) as edad_promedio\nFROM estudiantes\nJOIN paises ON estudiante.pais_id = pais.id\nGROUP BY pais.nombre\nORDER BY total_estudiantes DESC;'
  };

  useEffect(() => {
    setCode('');
    setCurrentLine(0);
    setIsTyping(true);
    
    // Get the code for the selected language
    const selectedCode = sampleCodes[language];
    const lines = selectedCode.split('\n');
    
    let lineIndex = 0;
    let charIndex = 0;
    
    const typingInterval = setInterval(() => {
      if (lineIndex < lines.length) {
        const currentLineText = lines[lineIndex];
        
        if (charIndex <= currentLineText.length) {
          setCode((prevCode) => {
            const updatedCode = prevCode.split('\n');
            
            // Ensure we have enough lines
            while (updatedCode.length <= lineIndex) {
              updatedCode.push('');
            }
            
            updatedCode[lineIndex] = currentLineText.substring(0, charIndex);
            return updatedCode.join('\n');
          });
          
          charIndex++;
        } else {
          lineIndex++;
          charIndex = 0;
          setCurrentLine(lineIndex);
        }
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
        simulateCodeOutput();
      }
    }, 50);
    
    return () => clearInterval(typingInterval);
  }, [language]);
  
  const simulateCodeOutput = () => {
    if (language === 'python') {
      setTimeout(() => {
        setCodeOutput('Filas: 1024, Columnas: 8\n\n   id       pais  edad  genero  educacion  ingresos\n0   1  Argentina    28       M    Master      1200\n1   2     Brasil    35       F       PhD      2500\n2   3    Colombia    22       M  Bachiller       850\n3   4      Chile    30       F  Licenciado      1800\n4   5      Mexico    26       M  Licenciado      1350\n...');
      }, 1000);
    }
    
    if (language === 'javascript') {
      setTimeout(() => {
        setCodeOutput('Datos cargados correctamente.\nSe encontraron 15 registros de 5 países diferentes.\nTiempo de carga: 235ms');
      }, 1000);
    }
  };

  const resetAnimation = () => {
    setCode('');
    setCodeOutput('');
    setCurrentLine(0);
    setIsTyping(true);
  };

  const togglePlayPause = () => {
    setIsTyping(!isTyping);
  };

  return (
    <div className="flex flex-col">
      <div className="relative font-mono text-sm overflow-hidden">
        <div className="grid grid-cols-[auto,1fr] w-full">
          {/* Line numbers */}
          <div className="py-2 pr-4 text-right text-gray-500 bg-gray-900 select-none">
            {code.split('\n').map((_, i) => (
              <div 
                key={i} 
                className={`px-2 ${currentLine === i ? 'bg-gray-800 text-primary' : ''}`}
              >
                {i + 1}
              </div>
            ))}
          </div>
          
          {/* Code content */}
          <div className="py-2 overflow-x-auto bg-gray-900">
            <pre className="font-mono">
              {code.split('\n').map((line, i) => (
                <div 
                  key={i} 
                  className={`px-4 ${currentLine === i ? 'bg-gray-800' : ''}`}
                >
                  <span dangerouslySetInnerHTML={{ 
                    __html: formatCode(line, language) 
                  }} />
                  {currentLine === i && isTyping && (
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ repeat: Infinity, duration: 1 }}
                      className="inline-block w-2 h-4 bg-primary ml-0.5"
                    ></motion.span>
                  )}
                </div>
              ))}
            </pre>
          </div>
        </div>
        
        {/* Controls */}
        <div className="absolute bottom-2 right-2 flex space-x-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full bg-gray-800 hover:bg-gray-700"
            onClick={togglePlayPause}
          >
            {isTyping ? <Pause size={14} /> : <PlayCircle size={14} />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full bg-gray-800 hover:bg-gray-700"
            onClick={resetAnimation}
          >
            <Rotate size={14} />
          </Button>
        </div>
      </div>
      
      {/* Output section */}
      {codeOutput && (
        <div className="mt-4 bg-gray-800 p-3 rounded-b-md font-mono text-sm">
          <div className="text-xs text-gray-400 mb-1">Output:</div>
          <div className="whitespace-pre-wrap overflow-x-auto text-gray-300">
            {codeOutput}
          </div>
        </div>
      )}
    </div>
  );
};

// Simple syntax highlighting
const formatCode = (code: string, language: string): string => {
  let formatted = code
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
    
  // Common patterns
  formatted = formatted
    // Strings
    .replace(/(['"])(.*?)\1/g, '<span style="color: #e6db74;">$&</span>')
    // Numbers
    .replace(/\b(\d+)\b/g, '<span style="color: #ae81ff;">$&</span>')
    // Comments
    .replace(/(\/\/.*|#.*)$/g, '<span style="color: #75715e;">$&</span>');
    
  if (language === 'python') {
    formatted = formatted
      // Keywords
      .replace(/\b(import|from|def|class|if|else|elif|for|while|return|try|except|with|as|print|True|False|None)\b/g, 
               '<span style="color: #f92672;">$&</span>')
      // Built-in functions and modules
      .replace(/\b(range|len|str|int|float|list|dict|set|tuple|pandas|numpy|matplotlib|seaborn)\b/g, 
               '<span style="color: #66d9ef;">$&</span>');
  } 
  
  if (language === 'javascript' || language === 'typescript') {
    formatted = formatted
      // Keywords
      .replace(/\b(const|let|var|function|return|if|else|for|while|class|import|export|from|async|await|try|catch|new|this)\b/g, 
               '<span style="color: #f92672;">$&</span>')
      // Built-in objects
      .replace(/\b(document|window|console|Array|Object|String|Number|Boolean|Promise)\b/g, 
               '<span style="color: #66d9ef;">$&</span>');
  }
  
  if (language === 'html') {
    formatted = formatted
      // Tags
      .replace(/(&lt;\/?[a-z0-9]+)(?=[\s&gt;])/g, '<span style="color: #f92672;">$&</span>')
      // Attributes
      .replace(/\s([a-z0-9-]+)=/g, '<span style="color: #a6e22e;"> $1</span>=');
  }
  
  if (language === 'css') {
    formatted = formatted
      // Selectors
      .replace(/([.#][a-z0-9_-]+)/g, '<span style="color: #a6e22e;">$&</span>')
      // Properties
      .replace(/([a-z-]+)(?=\s*:)/g, '<span style="color: #66d9ef;">$&</span>');
  }
  
  if (language === 'sql') {
    formatted = formatted
      // Keywords
      .replace(/\b(SELECT|FROM|WHERE|JOIN|ON|GROUP BY|ORDER BY|HAVING|INSERT|UPDATE|DELETE|CREATE|ALTER|DROP|AS|AND|OR|NOT|NULL|IS|IN|BETWEEN|LIKE|COUNT|SUM|AVG|MIN|MAX)\b/gi, 
               '<span style="color: #f92672;">$&</span>');
  }
  
  return formatted;
};

export default CodeEditor;