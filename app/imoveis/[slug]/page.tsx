import type { Metadata } from 'next';
import { client, urlFor } from '@/lib/sanity';
import { QUERY_BY_SLUG } from '@/lib/queries';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Bed, Bath, Car, Maximize, MapPin, Share2, MessageCircle } from 'lucide-react';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const property = await client.fetch(
    `*[_type == "imovel" && slug.current == $slug][0]{ titulo, descricao }`,
    { slug: params.slug }
  );
  if (!property) return { title: 'Imóvel não encontrado' };
  return {
    title: property.titulo,
    description: property.descricao?.substring(0, 160) || 'Imóvel em João Pessoa',
  };
}

export default async function PropertyPage({ params }: { params: { slug: string } }) {
  const property = await client.fetch(QUERY_BY_SLUG, { slug: params.slug });

  if (!property) notFound();

  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(property.preco);

  const whatsappMessage = encodeURIComponent(
    `Olá Renata, gostaria de mais informações sobre o imóvel: ${property.titulo} (REF: ${property.codigoRef})`
  );

  return (
    <div className="pt-32 pb-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Info */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-widest mb-4">
              <MapPin size={14} />
              {property.bairro?.nome}, {property.cidade?.nome}
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-navy mb-4">{property.titulo}</h1>
            <p className="text-gray-500 font-medium">REF: {property.codigoRef}</p>
          </div>
          <div className="text-right">
            <span className="text-gray-400 text-sm block mb-2">Valor do Investimento</span>
            <div className="text-4xl font-bold text-navy">{formattedPrice}</div>
            <div className="mt-4 flex gap-2 justify-end">
              <span className="bg-navy text-white text-[10px] font-bold uppercase px-4 py-1.5 rounded-full">
                {property.tipoNegocio === 'venda' ? 'Venda' : 'Locação'}
              </span>
              {property.categoriaNome && (
                <span className="bg-gold/20 text-gold text-[10px] font-bold uppercase px-4 py-1.5 rounded-full">
                  {property.categoriaNome}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Gallery Mosaico */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12 h-[600px]">
          <div className="md:col-span-2 relative rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={urlFor(property.imagemCapa).url()}
              alt={property.titulo}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="md:col-span-2 grid grid-cols-2 gap-4">
            {property.galeria?.slice(0, 4).map((img: any, idx: number) => (
              <div key={idx} className="relative rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={urlFor(img).url()}
                  alt={`${property.titulo} - ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Attributes */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex flex-col items-center gap-2">
                <Bed size={24} className="text-gold" />
                <span className="text-navy font-bold">{property.quartos}</span>
                <span className="text-gray-400 text-xs uppercase font-bold">Quartos</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Bath size={24} className="text-gold" />
                <span className="text-navy font-bold">{property.suites}</span>
                <span className="text-gray-400 text-xs uppercase font-bold">Suítes</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Car size={24} className="text-gold" />
                <span className="text-navy font-bold">{property.vagas}</span>
                <span className="text-gray-400 text-xs uppercase font-bold">Vagas</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Maximize size={24} className="text-gold" />
                <span className="text-navy font-bold">{property.area}m²</span>
                <span className="text-gray-400 text-xs uppercase font-bold">Área Total</span>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-serif text-navy mb-6">Descrição do Imóvel</h3>
              <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                {property.descricao}
              </div>
            </div>
          </div>

          {/* Sidebar / CTA */}
          <div className="space-y-8">
            <div className="bg-navy p-8 rounded-3xl text-white shadow-2xl sticky top-32">
              <h3 className="text-2xl font-serif mb-6">Gostou deste imóvel?</h3>
              <p className="text-gray-300 text-sm mb-8">
                Entre em contato agora mesmo para agendar uma visita ou tirar suas dúvidas com Renata Sibele.
              </p>

              <div className="space-y-4">
                <a
                  href={`https://wa.me/5583993014940?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-gold hover:bg-gold/90 text-white font-bold rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg"
                >
                  <MessageCircle size={20} />
                  Falar no WhatsApp
                </a>
                <button className="w-full py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl flex items-center justify-center gap-3 transition-all border border-white/20">
                  <Share2 size={20} />
                  Compartilhar
                </button>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gold">
                  <Image
                    src="https://res.cloudinary.com/dzgvyu921/image/upload/v1772821659/PROJETOS/renata-sibele/equipe/renata-sibele-perfil.png"
                    alt="Renata Sibele"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-sm">Renata Sibele</div>
                  <div className="text-[10px] text-gold uppercase font-bold tracking-widest">CRECI 13018-PB</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
