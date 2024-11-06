export interface ICharacter {
  id: number;
  name: string;
  status: IStatus;
  species: string;
  type: string;
  gender: IGender;
  origin: IOrigin;
  location: ILocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export type IOrigin = {
  name: string;
  url: string;
};

export type ILocation = {
  name: string;
  url: string;
};

export type IGender = "male" | "female" | "genderless" | "unknown";
export type IStatus = "alive" | "dead" | "unknown";

export type ICharacterFilters = {
  status: IStatus | undefined;
  gender: IGender | undefined;
};
