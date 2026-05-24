"use client";

import Image from 'next/image';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export function AboutSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Lado Esquerdo: Imagem */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border-4 border-gold/20 shadow-2xl">
              <Image 
                src="https://res.cloudinary.com/dzgvyu921/image/upload/v1772821659/PROJETOS/renata-sibele/equipe/renata-sibele-perfil.png"
                alt="Renata Sibele - Corretora de Imóveis em João Pessoa CRECI 13018"
                width={600}
                height={800}
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Moldura Decorativa */}
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-gold rounded-2xl z-0 opacity-20"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/10 rounded-full blur-3xl z-0"></div>
          </motion.div>

          {/* Lado Direito: Texto */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gold font-bold tracking-widest uppercase text-xs mb-4 block">Sobre Mim</span>
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-8 leading-tight">
              Compromisso e Autoridade no <br />
              <span className="italic">Mercado Imobiliário</span>
            </h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                Com o registro <strong>CRECI 13018-PB</strong>, Renata Sibele viabiliza conquistas através de uma consultoria técnica, honesta e presente em cada etapa do processo.
              </p>
              <p>
                Especialista em João Pessoa, seu foco é transformar o mercado imobiliário em uma experiência de segurança e rentabilidade para seus clientes. Mais que uma corretora, uma consultora dedicada a transformar m² em lares e ativos de valor.
              </p>
            </div>

            <div className="mt-12">
              <a 
                href="https://wa.me/5583993014940?text=Olá%20Renata,%20vi%20seu%20perfil%20no%20site%20e%20gostaria%20de%20uma%20consultoria." 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-navy text-white font-bold rounded-xl hover:bg-navy/90 transition-all shadow-xl hover:scale-105"
              >
                <MessageCircle size={20} />
                Falar com Renata agora
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
