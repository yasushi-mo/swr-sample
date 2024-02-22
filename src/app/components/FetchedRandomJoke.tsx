import { RandomJoke } from "../api";

type Props = {
  isValidating: boolean;
  randomJoke: RandomJoke | undefined;
};

export function FetchedRandomJoke({ isValidating, randomJoke }: Props) {
  if (isValidating) return <p>Validating...</p>;

  return (
    <ul>
      <li>- Type: {randomJoke?.type}</li>
      <li>- Setup: {randomJoke?.setup}</li>
      <li>- Punchline: {randomJoke?.punchline}</li>
    </ul>
  );
}
