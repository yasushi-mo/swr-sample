"use client";

import { useRandomJokeImmutable } from "@/app/auto-revalidation/api";
import { ROUTES_AUTO_REVALIDATION } from "../page";
import { RandomJokeContainer } from "../../components/RandomJokeContainer";

export default function DisableAutomaticRevalidations() {
  const heading = ROUTES_AUTO_REVALIDATION[5].label;
  const { data, isValidating } = useRandomJokeImmutable();

  return (
    <RandomJokeContainer
      heading={heading}
      description={`If the resource is immutable, that will never change if we revalidate again, we can disable all kinds of automatic revalidations for it.`}
      isValidating={isValidating}
      randomJoke={data}
    />
  );
}
