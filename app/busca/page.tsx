"use client";

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { client } from '@/lib/sanity';
import { IMOVEL_PROJECTION } from '@/lib/queries';
import { PropertyCard } from '@/src/components/PropertyCard';
import { SearchFilter } from '@/src/components/SearchFilter';
import { Loader2 } from 'lucide-react';

function SearchResults() {
  const searchParams = useSearchParams();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);

      const purpose = searchParams.get('purpose');
      const city = searchParams.get('city');
      const neighborhood = searchParams.get('neighborhood');
      const minPrice = searchParams.get('minPrice');
      const maxPrice = searchParams.get('maxPrice');
      const code = searchParams.get('code');
      const type = searchParams.get('type');

      const params: Record<string, any> = {};
      const conditions: string[] = ['_type == "imovel"'];

      if (purpose) {
        conditions.push('tipoNegocio == $purpose');
        params.purpose = purpose;
      }
      if (city) {
        conditions.push('cidade._ref == $city');
        params.city = city;
      }
      if (neighborhood) {
        conditions.push('bairro._ref == $neighborhood');
        params.neighborhood = neighborhood;
      }
      if (minPrice) {
        conditions.push('preco >= $minPrice');
        params.minPrice = parseInt(minPrice, 10);
      }
      if (maxPrice) {
        conditions.push('preco <= $maxPrice');
        params.maxPrice = parseInt(maxPrice, 10);
      }
      if (code) {
        conditions.push('codigoRef match $codePattern');
        params.codePattern = `*${code}*`;
      }
      if (type) {
        conditions.push('categoria._ref == $type');
        params.type = type;
      }

      const filter = conditions.join(' && ');
      const query = `*[${filter}]${IMOVEL_PROJECTION}`;

      const data = await client.fetch(query, params);
      setProperties(data);
      setLoading(false);
    };

    fetchResults();
  }, [searchParams]);

  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-serif text-navy mb-4">Resultados da Busca</h1>
          <p className="text-gray-500">Encontramos {properties.length} imóveis para você.</p>
        </div>

        <div className="mb-16">
          <SearchFilter />
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-24">
            <Loader2 className="animate-spin text-gold mb-4" size={48} />
            <p className="text-navy font-bold">Buscando os melhores imóveis...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {properties.map((prop: any) => (
              <PropertyCard key={prop._id} property={prop} />
            ))}
          </div>
        )}

        {!loading && properties.length === 0 && (
          <div className="text-center py-24 bg-white rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-serif text-navy mb-4">Nenhum imóvel encontrado</h3>
            <p className="text-gray-500 max-w-md mx-auto">
              Tente ajustar seus filtros ou busque por um código de referência diferente.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function BuscaPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <SearchResults />
    </Suspense>
  );
}
