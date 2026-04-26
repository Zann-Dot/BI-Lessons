import { Link } from "react-router";
import useFetch from "../../useFetch";
import MoviesTitle from "./MoviesTitle";
export default function Movies() {
  const { data, loading, error } = useFetch("http://localhost:3000/movies");

  return (
    <div>
      <ul className="list-group">
        {data?.map((m) => (
          <li
            key={m._id}
            className="list-group-item bg-dark text-light border-secondary"
          >
            {m.title}
          </li>
        ))}
      </ul>
      <MoviesTitle title={"Gully Boy"} />
      <Link to="/movies/submit" className="btn btn-primary mt-4">
        Add New Movie
      </Link>
    </div>
  );
}
