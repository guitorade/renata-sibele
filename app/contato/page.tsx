"use client";

import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Instagram, MessageCircle } from 'lucide-react';

export default function ContatoPage() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-cream min-h-screen pt-32 pb-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold font-bold tracking-widest uppercase text-xs mb-2 block">Fale Conosco</span>
          <h1 className="text-4xl md:text-5xl font-serif text-navy mb-4">Contato</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Estamos à disposição para ajudar você a encontrar o imóvel ideal em João Pessoa. Entre em contato pelos nossos canais oficiais.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-serif text-navy mb-8">Informações de Contato</h2>
              
              <div className="space-y-6">
                <a 
                  href="https://wa.me/5583993014940" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">WhatsApp</p>
                    <p className="text-lg text-navy font-bold">83 99301-4940</p>
                  </div>
                </a>

                <a 
                  href="mailto:renata_sibele@yahoo.com.br" 
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">E-mail</p>
                    <p className="text-lg text-navy font-bold">renata_sibele@yahoo.com.br</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center text-gold">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Endereço</p>
                    <p className="text-lg text-navy font-bold">Rua Major Ciraulo, nº 612, Manaíra, João Pessoa - PB</p>
                  </div>
                </div>

                <a 
                  href="https://www.instagram.com/renatasibele/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all">
                    <Instagram size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Instagram</p>
                    <p className="text-lg text-navy font-bold">@renatasibele</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-navy p-8 rounded-2xl text-white shadow-xl">
              <h3 className="text-xl font-serif mb-4">Horário de Atendimento</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex justify-between">
                  <span>Segunda - Sexta:</span>
                  <span className="font-bold text-white">08:00 - 18:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sábado:</span>
                  <span className="font-bold text-white">08:00 - 12:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Domingo:</span>
                  <span className="font-bold text-white">Sob agendamento</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form or CTA */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full flex flex-col justify-center text-center">
            <div className="mb-8">
              <div className="w-20 h-20 bg-cream rounded-full flex items-center justify-center text-gold mx-auto mb-6">
                <MessageCircle size={40} />
              </div>
              <h2 className="text-3xl font-serif text-navy mb-4">Atendimento Imediato</h2>
              <p className="text-gray-500 mb-8">
                Clique no botão abaixo para iniciar uma conversa diretamente no WhatsApp e tirar todas as suas dúvidas.
              </p>
              <a 
                href="https://wa.me/5583993014940?text=Olá%20Renata,%20estou%20visitando%20seu%20site%20e%20gostaria%20de%20mais%20informações." 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-xl gold-gradient text-white font-bold shadow-2xl hover:scale-105 transition-transform"
              >
                <MessageCircle size={24} />
                Falar no WhatsApp
              </a>
            </div>
            
            <div className="pt-8 border-t border-gray-50">
              <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-4">Localização</p>
              <div className="aspect-video rounded-xl overflow-hidden bg-gray-100 grayscale hover:grayscale-0 transition-all">
                {/* Placeholder for Map */}
                <img 
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80" 
                  alt="Mapa João Pessoa" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
