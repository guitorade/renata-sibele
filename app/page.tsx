import { client } from '@/lib/sanity';
import { QUERY_FEATURED, QUERY_TRENDING } from '@/lib/queries';
import { motion } from 'motion/react';

import { AboutSection } from "@/src/components/AboutSection";
import { SearchFilter } from "@/src/components/SearchFilter";
import { FeaturedCarousel } from "@/src/components/FeaturedCarousel";
import { TrendingSection } from "@/src/components/TrendingSection";
import { HeroSection } from "@/src/components/HeroSection";

export default async function HomePage() {
  const [featured, trending] = await Promise.all([
    client.fetch(QUERY_FEATURED),
    client.fetch(QUERY_TRENDING),
  ]);

  return (
    <div className="relative">
      {process.env.NEXT_PUBLIC_SANITY_PROJECT_ID === 'placeholder' && (
        <div className="bg-red-500 text-white text-center py-2 text-xs font-bold uppercase tracking-widest z-[100] relative">
          Atenção: O ID do Projeto Sanity não está configurado. Os imóveis não serão exibidos.
        </div>
      )}

      <HeroSection />
      <SearchFilter />
      <FeaturedCarousel properties={featured} />
      <AboutSection />
      <TrendingSection properties={trending} />
    </div>
  );
}
