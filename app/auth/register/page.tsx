'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

export default function RegisterPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const supabase = createClient();

  async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const fullName = formData.get('fullName') as string;

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });

    if (error) {
      toast.error(error.message);
      setIsLoading(false);
      return;
    }

    toast.success('¡Cuenta creada exitosamente! Por favor inicia sesión.');
    router.push('/auth/login');
  }

  return (
    <div className="glass-effect p-8 rounded-lg border border-gray-800">
      <div className="space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-bold gradient-text">Crear cuenta</h1>
          <p className="text-gray-400">Ingresa tus datos para comenzar</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          <div className="space-y-2">
            <Input
              name="fullName"
              placeholder="Nombre completo"
              required
              disabled={isLoading}
            />
          </div>
          <div className="space-y-2">
            <Input
              name="email"
              placeholder="correo@ejemplo.com"
              required
              type="email"
              disabled={isLoading}
            />
          </div>
          <div className="space-y-2">
            <Input
              name="password"
              placeholder="••••••••"
              required
              type="password"
              disabled={isLoading}
            />
          </div>

          <Button
            className="w-full bg-gradient-to-r from-primary to-secondary text-black font-medium"
            disabled={isLoading}
          >
            {isLoading ? 'Creando cuenta...' : 'Crear Cuenta'}
          </Button>
        </form>

        <p className="text-center text-sm text-gray-400">
          ¿Ya tienes una cuenta?{' '}
          <Link
            href="/auth/login"
            className="text-primary hover:underline"
          >
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  );
}