import { RandomJoke } from "../auto-revalidation/types";
import { FetchedRandomJoke } from "./FetchedRandomJoke";

type Props = {
  heading: string;
  description: string;
  isValidating: boolean;
  randomJoke: RandomJoke | undefined;
};

export function RandomJokeContainer({
  heading,
  description,
  isValidating,
  randomJoke,
}: Props) {
  return (
    <div className={`p-3`}>
      <h2 className={`mb-3 text-2xl font-semibold`}>{heading}</h2>
      <p className={`mb-3 whitespace-pre-wrap`}>{description}</p>
      <hr className={`mb-3`} />
      <p>Fetched Data from Random Joke API</p>
      <FetchedRandomJoke isValidating={isValidating} randomJoke={randomJoke} />
    </div>
  );
}
