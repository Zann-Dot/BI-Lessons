import Movies from "./lessons/BI1.1 CW/Movies";
import Books from "./lessons/BI1.1 HW1/Books";
import Hotels from "./lessons/BI1.1 HW2/Hotels";
import MovieFormSubmit from "./lessons/BI1.2 CW/MovieFormSubmit";
import BookFormSubmit from "./lessons/BI1.2 HW1/BookFormSubmit";
import HotelFormSubmit from "./lessons/BI1.2 HW2/HotelFormSubmit";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/books" element={<Books />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/movies/submit" element={<MovieFormSubmit />} />
        <Route path="/books/submit" element={<BookFormSubmit />} />
        <Route path="/hotels/submit" element={<HotelFormSubmit />} />
      </Routes>
    </>
  );
}

export default App;
