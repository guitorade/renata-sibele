"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Search, MapPin, Home, DollarSign, Hash, Tag } from 'lucide-react';
import { client } from '@/lib/sanity';
import { QUERY_CATEGORIAS, QUERY_CIDADES, QUERY_BAIRROS } from '@/lib/queries';

export function SearchFilter() {
  const router = useRouter();
  const [cities, setCities] = useState<any[]>([]);
  const [neighborhoods, setNeighborhoods] = useState<any[]>([]);
  const [categorias, setCategorias] = useState<any[]>([]);

  const [filters, setFilters] = useState({
    purpose: '',
    city: '',
    neighborhood: '',
    type: '',
    minPrice: '',
    maxPrice: '',
    code: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      const [cityData, neighborhoodData, categoriaData] = await Promise.all([
        client.fetch(QUERY_CIDADES),
        client.fetch(QUERY_BAIRROS),
        client.fetch(QUERY_CATEGORIAS),
      ]);
      setCities(cityData);
      setNeighborhoods(neighborhoodData);
      setCategorias(categoriaData);
    };
    fetchData();
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) params.append(key, value);
    });
    router.push(`/busca?${params.toString()}`);
  };

  const filteredNeighborhoods = filters.city
    ? neighborhoods.filter((n) => n.cidadeId === filters.city)
    : neighborhoods;

  return (
    <div className="w-full max-w-5xl mx-auto -mt-12 relative z-20 px-4">
      <form
        onSubmit={handleSearch}
        className="bg-white p-6 rounded-3xl shadow-2xl border border-gray-100"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Finalidade */}
          <div className="relative">
            <label className="text-[10px] font-bold uppercase text-gray-400 mb-1 block ml-1">Finalidade</label>
            <div className="relative">
              <Home className="absolute left-3 top-1/2 -translate-y-1/2 text-gold" size={18} />
              <select
                value={filters.purpose}
                onChange={(e) => setFilters({ ...filters, purpose: e.target.value })}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-gold appearance-none"
              >
                <option value="">Todos</option>
                <option value="venda">Comprar</option>
                <option value="locacao">Alugar</option>
              </select>
            </div>
          </div>

          {/* Cidade */}
          <div className="relative">
            <label className="text-[10px] font-bold uppercase text-gray-400 mb-1 block ml-1">Cidade</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gold" size={18} />
              <select
                value={filters.city}
                onChange={(e) => setFilters({ ...filters, city: e.target.value, neighborhood: '' })}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-gold appearance-none"
              >
                <option value="">Todas as Cidades</option>
                {cities.map((city) => (
                  <option key={city._id} value={city._id}>{city.nome}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Bairro */}
          <div className="relative">
            <label className="text-[10px] font-bold uppercase text-gray-400 mb-1 block ml-1">Bairro</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gold" size={18} />
              <select
                value={filters.neighborhood}
                onChange={(e) => setFilters({ ...filters, neighborhood: e.target.value })}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-gold appearance-none"
              >
                <option value="">Todos os Bairros</option>
                {filteredNeighborhoods.map((n) => (
                  <option key={n._id} value={n._id}>{n.nome}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Botão Buscar */}
          <div className="flex items-end">
            <button
              type="submit"
              className="w-full bg-navy text-white font-bold py-3 rounded-xl hover:bg-navy/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-navy/20"
            >
              <Search size={20} />
              Buscar Imóveis
            </button>
          </div>
        </div>

        {/* Filtros Avançados */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 pt-4 border-t border-gray-50">
          <div className="relative">
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gold" size={16} />
              <input
                type="number"
                placeholder="Preço Mínimo"
                value={filters.minPrice}
                onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-xl text-xs focus:ring-2 focus:ring-gold"
              />
            </div>
          </div>
          <div className="relative">
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gold" size={16} />
              <input
                type="number"
                placeholder="Preço Máximo"
                value={filters.maxPrice}
                onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-xl text-xs focus:ring-2 focus:ring-gold"
              />
            </div>
          </div>
          <div className="relative">
            <div className="relative">
              <Tag className="absolute left-3 top-1/2 -translate-y-1/2 text-gold" size={16} />
              <select
                value={filters.type}
                onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-xl text-xs focus:ring-2 focus:ring-gold appearance-none"
              >
                <option value="">Todas Categorias</option>
                {categorias.map((cat) => (
                  <option key={cat._id} value={cat._id}>{cat.nome}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="relative">
            <div className="relative">
              <Hash className="absolute left-3 top-1/2 -translate-y-1/2 text-gold" size={16} />
              <input
                type="text"
                placeholder="Código Ref."
                value={filters.code}
                onChange={(e) => setFilters({ ...filters, code: e.target.value })}
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-xl text-xs focus:ring-2 focus:ring-gold"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
