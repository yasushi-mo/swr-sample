import { RandomJoke } from "../auto-revalidation/types";
import { FetchedRandomJoke } from "./FetchedRandomJoke";

type Props = {
  heading: string;
  description: string;
  isValidating: boolean;
  errorMessage?: string;
  randomJoke: RandomJoke | undefined;
};

export function RandomJokeContainer({
  heading,
  description,
  isValidating,
  errorMessage,
  randomJoke,
}: Props) {
  return (
    <div className={`p-3`}>
      <h2 className={`mb-3 text-2xl font-semibold`}>{heading}</h2>
      <p className={`mb-3 whitespace-pre-wrap`}>{description}</p>
      <hr className={`mb-3`} />
      <p>Fetched Data from Random Joke API</p>
      <FetchedRandomJoke
        isValidating={isValidating}
        errorMessage={errorMessage}
        randomJoke={randomJoke}
      />
    </div>
  );
}
