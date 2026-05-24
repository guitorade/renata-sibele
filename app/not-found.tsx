import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8">
        <h1 className="text-6xl font-serif text-navy mb-4">404</h1>
        <p className="text-gray-500 mb-8">Página não encontrada</p>
        <Link
          href="/"
          className="px-6 py-3 bg-navy text-white rounded-xl font-bold hover:bg-navy/90 transition-all inline-block"
        >
          Voltar ao Início
        </Link>
      </div>
    </div>
  );
}
