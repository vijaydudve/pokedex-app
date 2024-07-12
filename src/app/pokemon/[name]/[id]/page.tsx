import PokemonDetailsLoader from '@/components/atoms/loader/detailpage-loader';
import DetailPageURLUpdate from '@/components/organisms/detailpage-client-wrapper/detailpage-client-wrapper';
import PokemonDetails from '@/components/organisms/pokemon-detail/pokemon-detail';
import { Metadata } from 'next';
import { Suspense } from 'react';

interface Props {
  params: { id: string, name: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Pokémon #${params.id} Details`,
    description: `Detailed information about Pokémon #${params.id}`,
  };
}


export default async function PokemonDetailPage({ params }: Props) {
  return (
    <>
      <DetailPageURLUpdate pokemonId={params.id} pokemonName={params.name} />
      <Suspense fallback={<PokemonDetailsLoader/>}>
        <PokemonDetails pokemonId={params.id} />
      </Suspense>
    </>
  );
}