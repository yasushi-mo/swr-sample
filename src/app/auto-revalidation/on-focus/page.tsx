"use client";

import { useRandomJoke } from "@/api";
import { ROUTES_AUTO_REVALIDATION } from "../page";
import { FetchedRandomJoke } from "../components/FetchedRandomJoke";

export default function RevalidateOnFocus() {
  const heading = ROUTES_AUTO_REVALIDATION[0].label;
  const { data, isValidating } = useRandomJoke({ revalidateOnFocus: true });

  if (isValidating) {
    return <div>Validating...</div>;
  }

  return (
    <FetchedRandomJoke
      heading={heading}
      description="When you re-focus a page or switch between tabs, SWR automatically revalidates data."
      randomJoke={data}
    />
  );
}
