import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getCharacters } from "~/api/characters";
import { QUERY_KEYS } from "~/constants/queryKeys";
import Characters from "./_components/Characters";
import { ICharacterFilters } from "~/types/character";

export default async function Page({
  searchParams,
}: {
  searchParams: ICharacterFilters;
}) {
  const queryClient = new QueryClient();

  const filters: ICharacterFilters = {
    status: searchParams.status,
    gender: searchParams.gender,
  };

  await queryClient.prefetchInfiniteQuery({
    queryKey: [QUERY_KEYS.CHARACTERS, filters],
    queryFn: ({ pageParam }) => getCharacters(filters, pageParam),
    initialPageParam: "1",
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className="container mx-auto p-6">
        <Characters />
      </main>
    </HydrationBoundary>
  );
}
