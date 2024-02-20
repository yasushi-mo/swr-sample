"use client";

import { RANDOM_JOKE_API_ENDPOINT, fetcher } from "@/app/api";
import { FetchedRandomJoke } from "@/app/auto-revalidation/components/FetchedRandomJoke";
import { useQuery } from "@tanstack/react-query";
import { ROUTE_TAN_STACK_QUERY } from "../page";

export default function CoreConcepts() {
  const heading = ROUTE_TAN_STACK_QUERY[0].label;
  const { isPending, error, data } = useQuery({
    queryKey: [],
    queryFn: () => fetcher(RANDOM_JOKE_API_ENDPOINT),
  });

  if (isPending) return "Processing...";

  if (error) return `An error has occurred: ${error.message}`;

  return (
    <FetchedRandomJoke
      heading={heading}
      description=""
      isValidating={isPending}
      randomJoke={data}
    />
  );
}
