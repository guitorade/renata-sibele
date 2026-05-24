"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8 bg-white rounded-3xl shadow-sm max-w-md">
        <h2 className="text-2xl font-serif text-navy mb-4">Algo deu errado</h2>
        <p className="text-gray-500 mb-6">
          Desculpe, ocorreu um erro ao carregar esta página.
        </p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-navy text-white rounded-xl font-bold hover:bg-navy/90 transition-all"
        >
          Tentar novamente
        </button>
      </div>
    </div>
  );
}
