import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const {
    data: character,
    isLoading,
    error,
  } = useSWR("/api/random-character", fetcher);

  if (error) return <h1>Failed to load</h1>;
  if (isLoading) return <h1>loading...</h1>;

  return (
    <>
      <h1>{character.firstName + " " + character.lastName}</h1>
      <p>
        Go and follow their twitter{" "}
        <span class="fake-link">{character.twitter}</span> or check out their
        geohash <span class="fake-link">{character.geohash}</span>.
      </p>
    </>
  );
}
