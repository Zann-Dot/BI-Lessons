import useFetch from "../../useFetch";
export default function MoviesTitle({ title }) {
  const { data, loading, error } = useFetch(
    `http://localhost:3000/movies/${title}`,
  );
  console.log(data);

  return data ? (
    <div>
      <h2 className="display-5 mt-4">{data.title}</h2>
      <p>
        <b>Director:</b> {data.director}
      </p>
      <p>
        <b>Country:</b> {data.country}
      </p>
      <p>
        <b>Released:</b> {data.releaseYear}
      </p>
      <p>
        <b>Ratings:</b> {data.rating}
      </p>
      <p>
        <b>Actors:</b> {data.actors?.join(", ")}
      </p>
      <p>
        <b>Plot:</b> {data.plot}
      </p>
      <p>
        <b>Awards:</b> {data.awards}
      </p>
      <img src={data.posterUrl} alt="Poster Image" />
    </div>
  ) : (
    loading && <p>Loading</p>
  );
}
