import { useEffect, useState } from "react";
import useFetch from "../../useFetch";

export default function MovieFormSubmit() {
  const { data, loading, error } = useFetch("http://localhost:3000/movies");
  const [successMsg, setSuccessMsg] = useState("");

  useEffect(() => {}, [data]);
  const addMovieData = async (movieData) => {
    try {
      const response = await fetch("http://localhost:3000/movies", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(movieData),
      });

      if (!response.ok) {
        const err = await response.json().then((res) => res.error);
        throw new Error(err);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const title = data.get("title");
    const releaseYear = parseInt(data.get("releaseYear"));
    const genre = data.get("genre").split(",");
    const director = data.get("director");
    const actor = data.get("actor").split(",");
    const language = data.get("language");
    const country = data.get("country");
    const rating = parseFloat(data.get("rating"));
    const plot = data.get("plot");
    const awards = data.get("awards");
    const posterUrl = data.get("posterUrl");

    const movieData = {
      title,
      releaseYear,
      genre,
      director,
      actor,
      language,
      country,
      rating,
      plot,
      awards,
      posterUrl,
    };
    if (
      !title ||
      !releaseYear ||
      !genre ||
      !director ||
      !actor ||
      !language ||
      !country ||
      !rating ||
      !plot ||
      !awards ||
      !posterUrl
    ) {
      alert("Please fill all the fields");
      return;
    } else {
      addMovieData(movieData);
    }
  };

  const handleDelete = async (movieId) => {
    try {
      const response = await fetch(`http://localhost:3000/movies/${movieId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const err = await response.json().then((res) => res.error);
        throw new Error(err);
      }

      const data = await response.json();
      if (data) {
        setSuccessMsg(data?.message);
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1 className="display-3 mb-4">Add New Movie</h1>
      <form onSubmit={handleSubmit} className="d-grid">
        <label className="form-label fs-5 text-white-50">Movie Title :</label>
        <input
          type="text"
          className="form-control bg-dark text-white border-secondary"
          name="title"
          placeholder="Enter movie name"
          required
        />
        <br />

        <label className="form-label fs-5 text-white-50">Actor Name :</label>
        <input
          type="text"
          className="form-control bg-dark text-white border-secondary"
          placeholder="Enter actor name"
          name="actor"
          required
        />
        <br />

        <label className="form-label fs-5 text-white-50">Release Year :</label>
        <input
          type="number"
          className="form-control bg-dark text-white border-secondary"
          placeholder="Enter release year"
          name="releaseYear"
          required
        />
        <br />

        <label className="form-label fs-5 text-white-50">Genre :</label>
        <input
          type="text"
          className="form-control bg-dark text-white border-secondary"
          placeholder="Enter genre"
          name="genre"
          required
        />
        <br />

        <label className="form-label fs-5 text-white-50">Director :</label>
        <input
          type="text"
          className="form-control bg-dark text-white border-secondary"
          placeholder="Enter director name"
          name="director"
          required
        />
        <br />

        <label className="form-label fs-5 text-white-50">Language :</label>
        <input
          type="text"
          className="form-control bg-dark text-white border-secondary"
          placeholder="Enter language"
          name="language"
          required
        />
        <br />

        <label htmlFor="country" className="form-label fs-5 text-white-50">
          Country :
        </label>
        <input
          type="text"
          className="form-control bg-dark text-white border-secondary"
          placeholder="Enter country"
          id="country"
          name="country"
          required
        />
        <br />

        <label className="form-label fs-5 text-white-50">Rating :</label>
        <input
          type="number"
          step="0.1"
          className="form-control bg-dark text-white border-secondary"
          placeholder="Enter rating"
          name="rating"
          required
        />
        <br />

        <label className="form-label fs-5 text-white-50">Plot :</label>
        <input
          type="text"
          className="form-control bg-dark text-white border-secondary"
          placeholder="Enter plot"
          name="plot"
          required
        />
        <br />

        <label className="form-label fs-5 text-white-50">Awards :</label>
        <input
          type="text"
          className="form-control bg-dark text-white border-secondary"
          placeholder="Enter awards"
          name="awards"
          required
        />
        <br />

        <label className="form-label fs-5 text-white-50">Poster Url :</label>
        <input
          type="url"
          className="form-control bg-dark text-white border-secondary"
          placeholder="Enter poster URL"
          name="posterUrl"
          required
        />
        <br />

        <label className="form-label fs-5 text-white-50">Trailer Url :</label>
        <input
          type="url"
          className="form-control bg-dark text-white border-secondary"
          placeholder="Enter trailer URL"
          name="trailerUrl"
        />
        <br />

        <button type="submit" className="btn btn-primary px-3 py-2">
          Submit
        </button>
      </form>

      <div className="container my-5">
        <p className="text-success text-center fs-4">{successMsg}</p>
        <h3 className="display-5 text-center mb-4">Movies List</h3>
        <ul className="list-group">
          {data?.map((m) => (
            <li
              key={m._id}
              className="list-group-item bg-dark text-white-50 border-secondary d-flex justify-content-between align-items-start"
            >
              {m.title}
              <button
                className="btn btn-primary"
                onClick={() => handleDelete(m._id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
