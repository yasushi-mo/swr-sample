import { RandomJoke } from "../api";

type Props = {
  isValidating: boolean;
  errorMessage?: string;
  randomJoke: RandomJoke | undefined;
};

export function FetchedRandomJoke({
  isValidating,
  errorMessage,
  randomJoke,
}: Props) {
  if (isValidating) return <p>Validating...</p>;

  if (errorMessage) return <p>Error: {errorMessage}</p>;

  return (
    <ul>
      <li>- Type: {randomJoke?.type}</li>
      <li>- Setup: {randomJoke?.setup}</li>
      <li>- Punchline: {randomJoke?.punchline}</li>
    </ul>
  );
}
