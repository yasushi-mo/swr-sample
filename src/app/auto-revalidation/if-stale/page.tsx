"use client";

import { useRandomJoke } from "@/api";
import { ROUTES_AUTO_REVALIDATION } from "../page";
import { FetchedRandomJoke } from "../components/FetchedRandomJoke";

export default function RevalidateIfStale() {
  const heading = ROUTES_AUTO_REVALIDATION[1].label;
  const { data, isValidating, mutate } = useRandomJoke({
    revalidateIfStale: false,
  });

  return (
    <>
      <FetchedRandomJoke
        heading={heading}
        description={`The revalidateIfStale controls if SWR should revalidate when it mounts and there is stale data.`}
        isValidating={isValidating}
        randomJoke={data}
      />
      <button className={`ml-3 border rounded`} onClick={() => mutate()}>
        mutate
      </button>
    </>
  );
}
