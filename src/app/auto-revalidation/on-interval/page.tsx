"use client";

import { useRandomJoke } from "@/app/auto-revalidation/api";
import { ROUTES_AUTO_REVALIDATION } from "../page";
import { FetchedRandomJoke } from "../components/FetchedRandomJoke";

export default function RevalidateOnInterval() {
  const heading = ROUTES_AUTO_REVALIDATION[3].label;
  const { data, isValidating } = useRandomJoke({ refreshInterval: 5000 });

  return (
    <FetchedRandomJoke
      heading={heading}
      description={`In many cases, data changes because of multiple devices, multiple users, multiple tabs. How can we over time update the data on screen?\r\nSWR will give you the option to automatically refetch data. It’s smart which means refetching will only happen if the component associated with the hook is on screen.`}
      isValidating={isValidating}
      randomJoke={data}
    />
  );
}
