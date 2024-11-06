export const CHARACTER_STATUS = {
  ALIVE: "alive",
  DEAD: "dead",
  UNKNOWN: "unknown",
};

export const CHARACTER_GENDER = {
  MALE: "male",
  FEMALE: "female",
  GENDERLESS: "genderless",
  UNKNOWN: "unknown",
};

export const CHARACTER_THEME = {
  status: {
    [CHARACTER_STATUS.ALIVE]: "bg-green-400",
    [CHARACTER_STATUS.DEAD]: "bg-red-400",
    [CHARACTER_STATUS.UNKNOWN]: "bg-gray-400",
  },
  gender: {
    [CHARACTER_GENDER.MALE]: "border-blue-100",
    [CHARACTER_GENDER.FEMALE]: "border-pink-100",
    [CHARACTER_GENDER.GENDERLESS]: "border-purple-100",
    [CHARACTER_GENDER.UNKNOWN]: "border-gray-100",
  },
};
