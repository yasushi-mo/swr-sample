import useSWR, { SWRConfiguration } from "swr";

type RandomJoke = {
  id: number;
  type: string;
  setup: string;
  punchline: string;
};

const fetcher = async (url: string) => {
  const res = await fetch(url);
  return await res.json();
};

export const useRandomJoke = (options: SWRConfiguration = {}) =>
  useSWR<RandomJoke>(
    "https://official-joke-api.appspot.com/random_joke",
    fetcher,
    options
  );
