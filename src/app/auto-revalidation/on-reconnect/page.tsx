"use client";

import { useRandomJoke } from "@/api";
import { ROUTES_AUTO_REVALIDATION } from "../page";
import { FetchedRandomJoke } from "../components/FetchedRandomJoke";

export default function RevalidateOnReconnect() {
  const heading = ROUTES_AUTO_REVALIDATION[3].label;
  const { data, isValidating } = useRandomJoke({ revalidateOnReconnect: true });

  return (
    <FetchedRandomJoke
      heading={heading}
      description={`It's useful to also revalidate when the user is back online. This scenario happens a lot when the user unlocks their computer, but the internet is not yet connected at the same moment.`}
      isValidating={isValidating}
      randomJoke={data}
    />
  );
}
