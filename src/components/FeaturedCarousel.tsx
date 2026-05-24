"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PropertyCard } from './PropertyCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface FeaturedCarouselProps {
  properties: any[];
}

export function FeaturedCarousel({ properties }: FeaturedCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || properties.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % properties.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, properties.length]);

  if (properties.length === 0) return null;

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-gold font-bold tracking-widest uppercase text-xs mb-2 block">Seleção Especial</span>
            <h2 className="text-4xl font-serif text-navy">Imóveis em Destaque</h2>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => setCurrentIndex((prev) => (prev - 1 + properties.length) % properties.length)}
              className="p-3 rounded-full border border-gray-200 hover:bg-navy hover:text-white transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => setCurrentIndex((prev) => (prev + 1) % properties.length)}
              className="p-3 rounded-full border border-gray-200 hover:bg-navy hover:text-white transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* We show 3 at a time on desktop, but for simplicity in this carousel we'll just slice or animate */}
            {properties.slice(currentIndex, currentIndex + 3).map((prop, idx) => (
              <PropertyCard key={prop._id} property={prop} />
            ))}
            {/* Handle wrap around if needed, but for now simple slice is fine for demo */}
          </div>
        </div>
      </div>
    </section>
  );
}
