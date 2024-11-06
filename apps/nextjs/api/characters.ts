import { ICharacter, ICharacterFilters } from "~/types/character";
import api from "./axios";
import { ApiResponse } from "~/types/api";

export const getCharacters = async (
  filters?: ICharacterFilters,
  pageParam?: string,
) => {
  const { data } = await api.get<ApiResponse<ICharacter>>("/character", {
    params: { ...filters, page: pageParam },
  });

  return data;
};
