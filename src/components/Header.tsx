"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Comprar', path: '/busca?purpose=venda' },
    { name: 'Alugar', path: '/busca?purpose=locacao' },
    { name: 'Sobre', path: '/sobre' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex flex-col group">
            <span className={`text-2xl font-serif tracking-tight leading-none ${isScrolled ? 'text-navy' : 'text-navy md:text-white'}`}>
              RENATA <span className="font-bold">SIBELE</span>
            </span>
            <span className={`text-[9px] tracking-[0.15em] uppercase font-sans font-bold mt-1 ${isScrolled ? 'text-gold' : 'text-gold'}`}>
              CORRETORA DE IMÓVEIS - CRECI 13018
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`text-sm font-medium transition-colors hover:text-gold ${
                  isScrolled ? 'text-navy' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="https://wa.me/5583993014940" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full gold-gradient text-white text-sm font-semibold shadow-lg hover:scale-105 transition-transform"
            >
              <Phone size={16} />
              Falar com Renata
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden p-2 ${isScrolled ? 'text-navy' : 'text-navy md:text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 p-4"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="text-navy text-lg font-medium py-2 border-b border-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="https://wa.me/5583993014940" 
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl gold-gradient text-white font-semibold"
            >
              <Phone size={18} />
              WhatsApp
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
