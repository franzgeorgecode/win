'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, Trophy, User, Menu, X, LogOut,
  BarChart2, Brain, Code2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { createClient } from '@/lib/supabase/client';
import { cn } from '@/lib/utils';

const menuItems = [
  {
    title: 'Aprender',
    icon: BookOpen,
    href: '/dashboard',
  },
  {
    title: 'Práctica',
    icon: Code2,
    href: '/dashboard/practice',
  },
  {
    title: 'Logros',
    icon: Trophy,
    href: '/dashboard/achievements',
  },
  {
    title: 'Estadísticas',
    icon: BarChart2,
    href: '/dashboard/stats',
  },
  {
    title: 'Perfil',
    icon: User,
    href: '/dashboard/profile',
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();
  const supabase = createClient();

  async function handleSignOut() {
    await supabase.auth.signOut();
    window.location.href = '/';
  }

  // Close sidebar on route change on mobile
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 glass-effect border-b border-gray-800 h-16">
        <div className="flex items-center justify-between px-4 h-full">
          <Link href="/dashboard" className="flex items-center gap-2">
            <Brain className="h-6 w-6 text-primary" />
            <span className="font-bold gradient-text">CodeMaster AI</span>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </header>

      {/* Sidebar */}
      <AnimatePresence>
        {(isSidebarOpen || typeof window !== 'undefined' && window.innerWidth >= 1024) && (
          <motion.aside
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: 'spring', damping: 20 }}
            className={cn(
              "fixed top-0 left-0 z-40 h-screen glass-effect border-r border-gray-800",
              "w-64 lg:w-72"
            )}
          >
            <div className="flex flex-col h-full">
              {/* Sidebar Header */}
              <div className="h-16 flex items-center gap-2 px-6">
                <Brain className="h-6 w-6 text-primary" />
                <span className="font-bold gradient-text">CodeMaster AI</span>
              </div>

              {/* Navigation */}
              <nav className="flex-1 px-4 py-6">
                <ul className="space-y-2">
                  {menuItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={cn(
                            "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                            "hover:bg-gray-800",
                            isActive && "bg-gray-800 text-primary"
                          )}
                        >
                          <item.icon className="h-5 w-5" />
                          <span>{item.title}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* Sidebar Footer */}
              <div className="p-4 border-t border-gray-800">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-red-500 hover:text-red-400 hover:bg-red-500/10"
                  onClick={handleSignOut}
                >
                  <LogOut className="mr-2 h-5 w-5" />
                  Cerrar Sesión
                </Button>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className={cn(
        "min-h-screen transition-all duration-300",
        "pt-16 lg:pt-0 lg:pl-72"
      )}>
        <div className="container mx-auto p-6">
          {children}
        </div>
      </main>
    </div>
  );
}