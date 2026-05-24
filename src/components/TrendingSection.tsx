"use client";

import { Flame } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';

interface TrendingSectionProps {
  properties: any[];
}

export function TrendingSection({ properties }: TrendingSectionProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-12">
          <div className="p-3 bg-orange-100 rounded-2xl text-orange-600">
            <Flame size={24} />
          </div>
          <div>
            <span className="text-orange-600 font-bold tracking-widest uppercase text-[10px] block">Trending</span>
            <h2 className="text-3xl font-serif text-navy">Mais Vistos da Semana</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {properties.map((prop) => (
            <Link 
              key={prop._id} 
              href={`/imoveis/${prop.slug.current}`}
              className="group flex flex-col gap-4"
            >
              <div className="relative h-48 rounded-2xl overflow-hidden">
                <Image 
                  src={urlFor(prop.imagemCapa).url()}
                  alt={prop.titulo}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold text-navy">
                  {prop.views} views
                </div>
              </div>
              <div>
                <h3 className="text-navy font-serif text-lg line-clamp-1 group-hover:text-gold transition-colors">
                  {prop.titulo}
                </h3>
                <p className="text-gold font-bold text-sm">
                  {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(prop.preco)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
