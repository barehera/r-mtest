import { useInfiniteQuery } from "@tanstack/react-query";
import { getCharacters } from "~/api/characters";
import { QUERY_KEYS } from "~/constants/queryKeys";
import { ICharacterFilters } from "~/types/character";

export const useCharacterData = (filters: ICharacterFilters) => {
  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.CHARACTERS, filters],
    queryFn: ({ pageParam }) => getCharacters(filters, pageParam),
    initialPageParam: "1",
    getNextPageParam: (lastPage) => {
      if (!lastPage.info?.next) return undefined;
      const url = new URL(lastPage.info.next);
      return url.searchParams.get("page");
    },
  });
};
