export const fetcher = async (url: string) => {
  const res = await fetch(url);
  return await res.json();
};

export const RANDOM_JOKE_API_ENDPOINT =
  "https://official-joke-api.appspot.com/random_joke";

export type RandomJoke = {
  id: number;
  type: string;
  setup: string;
  punchline: string;
};
