"use client";

import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { CharacterCard } from "./CharacterCard";
import { useCharacterData } from "~/api/queries/useCharactersData";
import useCharacterFilters from "~/hooks/useCharacterFilters";
import CharacterFilters from "./CharacterFilters";

import LoadingSpinner from "./LoadingSpinner";

export const Characters = () => {
  const { filters } = useCharacterFilters();
  const {
    data,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    isError,
    isLoading,
  } = useCharacterData(filters);
  const { ref, inView } = useInView({ threshold: 0 });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  if (isError) {
    return (
      <div className="text-center text-red-500">Error loading characters</div>
    );
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const characters = data?.pages.flatMap((page) => page.results) ?? [];

  return (
    <div>
      <AnimatePresence mode="popLayout">
        <CharacterFilters />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {characters.map((character, index) => (
            <CharacterCard
              key={character.id}
              character={character}
              index={index}
            />
          ))}
        </div>
      </AnimatePresence>

      {isFetchingNextPage && <LoadingSpinner />}

      <div ref={ref} />
    </div>
  );
};

export default Characters;
