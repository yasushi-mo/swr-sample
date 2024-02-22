"use client";

import { useRandomJoke } from "@/app/auto-revalidation/api";
import { ROUTES_AUTO_REVALIDATION } from "../page";
import { RandomJokeContainer } from "../../components/RandomJokeContainer";

export default function RevalidateOnReconnect() {
  const heading = ROUTES_AUTO_REVALIDATION[5].label;
  const { data, isValidating } = useRandomJoke({ revalidateOnReconnect: true });

  return (
    <RandomJokeContainer
      heading={heading}
      description={`It's useful to also revalidate when the user is back online. This scenario happens a lot when the user unlocks their computer, but the internet is not yet connected at the same moment.`}
      isValidating={isValidating}
      randomJoke={data}
    />
  );
}
