"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Bed, Bath, Car, Maximize, MapPin } from 'lucide-react';
import { urlFor } from '@/lib/sanity';
import { motion } from 'motion/react';

interface PropertyCardProps {
  property: any;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const {
    titulo,
    slug,
    preco,
    tipoNegocio,
    imagemCapa,
    quartos,
    banheiros,
    vagas,
    area,
    bairro,
    cidade,
    codigoRef
  } = property;

  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(preco);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
    >
      <Link href={`/imoveis/${slug.current}`}>
        <div className="relative h-64 overflow-hidden">
          <Image
            src={urlFor(imagemCapa).url()}
            alt={titulo}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="bg-navy text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full">
              {tipoNegocio === 'venda' ? 'Venda' : 'Locação'}
            </span>
            {property.isDestaque && (
              <span className="bg-gold text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full">
                Destaque
              </span>
            )}
          </div>
          <div className="absolute bottom-4 left-4">
            <span className="bg-white/90 backdrop-blur-sm text-navy text-[10px] font-bold px-2 py-1 rounded">
              REF: {codigoRef}
            </span>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-1 text-gray-400 text-xs mb-2">
            <MapPin size={12} />
            <span>{bairro?.nome}, {cidade?.nome}</span>
          </div>
          
          <h3 className="text-navy font-serif text-xl mb-4 line-clamp-1 group-hover:text-gold transition-colors">
            {titulo}
          </h3>

          <div className="grid grid-cols-4 gap-2 mb-6 border-y border-gray-50 py-4">
            <div className="flex flex-col items-center gap-1">
              <Bed size={16} className="text-gold" />
              <span className="text-[10px] text-gray-500 font-bold">{quartos} Qts</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Bath size={16} className="text-gold" />
              <span className="text-[10px] text-gray-500 font-bold">{banheiros} Ban</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Car size={16} className="text-gold" />
              <span className="text-[10px] text-gray-500 font-bold">{vagas} Vag</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Maximize size={16} className="text-gold" />
              <span className="text-[10px] text-gray-500 font-bold">{area}m²</span>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-navy font-bold text-xl">{formattedPrice}</span>
            <span className="text-gold text-xs font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform">
              Ver Detalhes →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
