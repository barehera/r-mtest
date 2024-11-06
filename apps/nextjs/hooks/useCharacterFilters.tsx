import { useRouter, useSearchParams } from "next/navigation";
import { ICharacterFilters } from "~/types/character";

type FilterKey = keyof ICharacterFilters;
type FilterValue<T extends FilterKey> = ICharacterFilters[T] | null;

type UseCharacterFiltersReturn = {
  filters: ICharacterFilters;
  setFilter: <T extends FilterKey>(key: T, value: FilterValue<T>) => void;
  resetFilters: () => void;
  hasAnyFilter: () => boolean;
};

const FILTER_KEYS: FilterKey[] = ["status", "gender"];

const useCharacterFilters = (): UseCharacterFiltersReturn => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const setFilter = <T extends FilterKey>(key: T, value: FilterValue<T>) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    router.push(`?${params.toString()}`);
  };

  const getFilter = <T extends FilterKey>(
    key: T,
  ): ICharacterFilters[T] | undefined => {
    const value = searchParams.get(key) as ICharacterFilters[T] | null;
    return value || undefined;
  };

  const resetFilters = () => {
    const currentUrl = window.location.pathname;
    router.push(currentUrl);
  };

  const hasAnyFilter = () => {
    const params = new URLSearchParams(searchParams.toString());
    return FILTER_KEYS.some((key) => params.get(key));
  };

  return {
    filters: {
      status: getFilter("status"),
      gender: getFilter("gender"),
    },
    setFilter,
    resetFilters,
    hasAnyFilter,
  };
};

export default useCharacterFilters;
