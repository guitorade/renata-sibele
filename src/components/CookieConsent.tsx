"use client";

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) setShow(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] bg-navy text-white p-4 shadow-2xl border-t border-gold/20">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-300">
          Utilizamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa política de privacidade.
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={accept}
            className="px-6 py-2 bg-gold text-white text-sm font-bold rounded-lg hover:bg-gold/90 transition-all whitespace-nowrap"
          >
            Aceitar
          </button>
          <button
            onClick={accept}
            aria-label="Fechar"
            className="p-2 text-gray-400 hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
