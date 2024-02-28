"use client";

import { RANDOM_JOKE_API_ENDPOINT, fetcher } from "@/app/api";
import { RandomJokeContainer } from "@/app/components/RandomJokeContainer";
import { useQuery } from "@tanstack/react-query";
import { ROUTE_TAN_STACK_QUERY } from "../page";

export default function CoreConcepts() {
  const heading = ROUTE_TAN_STACK_QUERY[0].label;
  const { isPending, error, data } = useQuery({
    queryKey: [],
    queryFn: () => fetcher(RANDOM_JOKE_API_ENDPOINT),
  });

  return (
    <RandomJokeContainer
      heading={heading}
      description="TanStack Query (FKA React Query) is often described as the missing data-fetching library for web applications, but in more technical terms, it makes fetching, caching, synchronizing and updating server state in your web applications a breeze."
      isValidating={isPending}
      errorMessage={error?.message}
      randomJoke={data}
    />
  );
}
