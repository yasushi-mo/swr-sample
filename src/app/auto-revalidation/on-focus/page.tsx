"use client";

import { useRandomJoke } from "@/api";
import { ROUTES_AUTO_REVALIDATION } from "../page";
import { FetchedRandomJoke } from "../components/FetchedRandomJoke";

export default function RevalidateOnFocus() {
  const heading = ROUTES_AUTO_REVALIDATION[2].label;
  const { data, isValidating } = useRandomJoke({ revalidateOnFocus: true });

  return (
    <FetchedRandomJoke
      heading={heading}
      description={`When you re-focus a page or switch between tabs, SWR automatically revalidates data.\r\nThis can be useful to immediately synchronize to the latest state. This is helpful for refreshing data in scenarios like stale mobile tabs, or laptops that went to sleep.`}
      isValidating={isValidating}
      randomJoke={data}
    />
  );
}
