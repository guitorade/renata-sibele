"use client";

import Link from 'next/link';
import { Phone, Mail, Instagram, Facebook, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-serif font-bold text-gold mb-4">Renata Sibele</h3>
            <p className="text-gray-400 text-sm mb-6">
              Corretora de Imóveis (CRECI: 13018-PB). Especialista no mercado imobiliário de João Pessoa, com foco em Manaíra e região.
            </p>
            <p className="text-xs text-gray-500">CRECI: 13018-PB</p>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="/" className="hover:text-gold transition-colors">Início</Link></li>
              <li><Link href="/busca?purpose=venda" className="hover:text-gold transition-colors">Comprar</Link></li>
              <li><Link href="/busca?purpose=locacao" className="hover:text-gold transition-colors">Alugar</Link></li>
              <li><Link href="/contato" className="hover:text-gold transition-colors">Contato</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6">Contato</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gold" />
                <a href="https://wa.me/5583993014940" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">83 99301-4940</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-gold" />
                <a href="mailto:renata_sibele@yahoo.com.br" className="hover:text-gold transition-colors">renata_sibele@yahoo.com.br</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-gold" />
                <span>Rua Major Ciraulo, nº 612, Manaíra, João Pessoa - PB</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6">Siga-nos</h4>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/renatasibele/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-gold hover:text-gold transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-gold hover:text-gold transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Renata Sibele Imóveis. Todos os direitos reservados.</p>
          
          <div style={{ padding: '30px 0', textAlign: 'center', background: 'transparent' }}>
            <a 
              href='https://tuctech.com.br' 
              target='_blank' 
              rel="noopener noreferrer"
              style={{ 
                textDecoration: 'none', 
                fontFamily: 'sans-serif', 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '8px', 
                opacity: 0.6, 
                transition: '0.3s' 
              }}
              onMouseOver={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseOut={(e) => (e.currentTarget.style.opacity = "0.6")}
            >
              <span style={{ color: '#888', fontSize: '11px', fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase' }}>Powered by</span>
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <strong style={{ color: 'inherit', fontWeight: 900, fontSize: '15px' }}>TUC</strong>
                <span style={{ color: '#64FFDA', fontWeight: 400, fontFamily: 'monospace', fontSize: '15px', marginLeft: '2px' }}>tech</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
