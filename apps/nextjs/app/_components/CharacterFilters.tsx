"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/components/ui/select";
import { IGender, IStatus } from "~/types/character";
import { GENDER_OPTIONS, STATUS_OPTIONS } from "~/constants/characterFilters";
import useCharacterFilters from "~/hooks/useCharacterFilters";
import { Button } from "@repo/ui/components/ui/button";
import { motion } from "framer-motion";

const CharacterFilters = () => {
  const { setFilter, filters, hasAnyFilter, resetFilters } =
    useCharacterFilters();

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4 p-6 w-full bg-white container mx-auto"
    >
      <Select
        onValueChange={(value: IStatus) => setFilter("status", value)}
        value={filters.status}
      >
        <SelectTrigger>
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          {STATUS_OPTIONS.map((status) => (
            <SelectItem key={status.value} value={status.value}>
              {status.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select
        onValueChange={(value: IGender) => setFilter("gender", value)}
        value={filters.gender}
      >
        <SelectTrigger>
          <SelectValue placeholder="Gender" />
        </SelectTrigger>
        <SelectContent>
          {GENDER_OPTIONS.map((gender) => (
            <SelectItem key={gender.value} value={gender.value}>
              {gender.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {hasAnyFilter() && (
        <Button className="w-full lg:w-auto" onClick={resetFilters}>
          Reset Filters
        </Button>
      )}
    </motion.div>
  );
};

export default CharacterFilters;
