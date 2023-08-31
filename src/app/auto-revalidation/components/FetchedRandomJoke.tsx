import { RandomJoke } from "../types";

type Props = {
  heading: string;
  description: string;
  randomJoke: RandomJoke | undefined;
};

export function FetchedRandomJoke({ heading, description, randomJoke }: Props) {
  return (
    <>
      <h2 className={`mb-3 text-2xl font-semibold`}>{heading}</h2>
      <p>{description}</p>
      <hr />
      <p>Fetched Data from Random Joke API</p>
      <ul>
        <li>- Type: {randomJoke?.type}</li>
        <li>- Setup: {randomJoke?.setup}</li>
        <li>- Punchline: {randomJoke?.punchline}</li>
      </ul>
    </>
  );
}
