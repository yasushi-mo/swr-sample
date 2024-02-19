"use client";

import { useRandomJoke } from "@/app/auto-revalidation/api";
import { ROUTES_AUTO_REVALIDATION } from "../page";
import { FetchedRandomJoke } from "../components/FetchedRandomJoke";

export default function RevalidateOnMount() {
  const heading = ROUTES_AUTO_REVALIDATION[0].label;
  const { data, isValidating } = useRandomJoke({ revalidateOnMount: true });

  return (
    <FetchedRandomJoke
      heading={heading}
      description={`It's useful to force override SWR revalidation on mounting.`}
      isValidating={isValidating}
      randomJoke={data}
    />
  );
}
