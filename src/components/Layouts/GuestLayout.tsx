'use client';
import { LayoutProps } from '@/hooks/types';
import { useEffect, useState } from 'react';
import Loading from '@/app/loader'; 
import Footer from './Footer';
import Navbar from './Navbar';

export default function GuestLayout({ children }: LayoutProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Loading />;

  return (
    <section className="overflow-hidden">
      <div className="relative top-0 w-full">
        <Navbar />
      </div>
      <main className="mx-auto">{children}</main>
      <Footer />
    </section>
  );
}
