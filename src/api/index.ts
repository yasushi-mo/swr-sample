import useSWR, { SWRConfiguration } from "swr";
import useSWRImmutable from "swr/immutable";

type RandomJoke = {
  id: number;
  type: string;
  setup: string;
  punchline: string;
};

const RANDOM_JOKE_API_ENDPOINT =
  "https://official-joke-api.appspot.com/random_joke";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  return await res.json();
};

export const useRandomJoke = (options: SWRConfiguration = {}) =>
  useSWR<RandomJoke>(RANDOM_JOKE_API_ENDPOINT, fetcher, options);

export const useRandomJokeImmutable = () =>
  useSWRImmutable<RandomJoke>(RANDOM_JOKE_API_ENDPOINT, fetcher);
