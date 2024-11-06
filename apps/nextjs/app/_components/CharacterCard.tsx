import { motion } from "framer-motion";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@repo/ui/components/ui/card";
import { ICharacter, IStatus } from "~/types/character";
import { cn } from "@repo/ui/lib/utils";
import { useCharacterAnimation } from "~/hooks/useCharacterAnimation";

interface CharacterCardProps {
  character: ICharacter;
  index: number;
}

export const CharacterCard = ({ character, index }: CharacterCardProps) => {
  const { getAnimationProps } = useCharacterAnimation(index);

  return (
    <motion.div {...getAnimationProps()}>
      <Card
        className={cn(
          "flex flex-row items-center",
          character.gender.toLowerCase() === "male" && "border-blue-100",
          character.gender.toLowerCase() === "female" && "border-pink-100",
          character.gender.toLowerCase() === "genderless" &&
            "border-purple-100",
          character.gender.toLowerCase() === "unknown" && "border-gray-100",
        )}
      >
        <Image
          src={character.image}
          alt={character.name}
          width={144}
          height={144}
          className="w-36 object-contain"
        />
        <CardHeader>
          <CardTitle>{character.name}</CardTitle>
          <div className="flex items-center gap-1">
            <CharacterStatus status={character.status} />
            <CardDescription className="text-sm">
              {character.status} - {character.species}
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </motion.div>
  );
};

const CharacterStatus = ({ status }: { status: IStatus }) => {
  return (
    <div
      className={cn(
        "w-2 h-2 rounded-full",
        status.toLowerCase() === "alive" && "bg-green-500",
        status.toLowerCase() === "dead" && "bg-red-500",
        status.toLowerCase() === "unknown" && "bg-gray-500",
      )}
    />
  );
};
