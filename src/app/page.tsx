import Header from "@/components/molecules/header/header";
import Pagination from "@/components/molecules/pagination/pagination";
import FilterOptions from "@/components/organisms/filter-options/filter-options";
import PokemonList from "@/components/organisms/pokemon-list/pokemon-list";
import { fetchPokemon } from "@/services/pokemon-service";
import { Suspense } from "react";

interface Props {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function Home({searchParams}: Props) {
  console.log('search',searchParams)
  const currentPage = Number(searchParams.page) || 1;
  const itemsPerPage = 20;
  const totalItems = 1000;

  return (
    <main className="max-w-screen-xl mx-auto h-full px-8 py-16 md:px-16 md:py-0 bg-primary">
      <Header />
      <Suspense fallback={<div>Loading filters...</div>}>
        {/* <FilterOptions searchParams={searchParams}/> */}
      </Suspense>
      <Suspense fallback={<div>Loading Pokémon...</div>}>
        <PokemonList searchParams={searchParams} />
      </Suspense>
            
    </main>
  );
}