import { type } from "os";
import useSWR, { SWRConfiguration } from "swr";
import useSWRImmutable from "swr/immutable";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  return await res.json();
};

const RANDOM_JOKE_API_ENDPOINT =
  "https://official-joke-api.appspot.com/random_joke";

type RandomJoke = {
  id: number;
  type: string;
  setup: string;
  punchline: string;
};

export const useRandomJoke = (options: SWRConfiguration = {}) =>
  useSWR<RandomJoke>(RANDOM_JOKE_API_ENDPOINT, fetcher, options);

export const useRandomJokeImmutable = () =>
  useSWRImmutable<RandomJoke>(RANDOM_JOKE_API_ENDPOINT, fetcher);

const TODAY_API_ENDPOINT =
  "http://calapi.inadiutorium.cz/api/v0/en/calendars/general-en/today";

export const useToday = (options: SWRConfiguration = {}) =>
  useSWR(TODAY_API_ENDPOINT, fetcher, options);
