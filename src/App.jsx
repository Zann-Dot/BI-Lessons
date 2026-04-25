import Movies from "./lessons/BI1.1 CW/Movies";
import Books from "./lessons/BI1.1 HW1/Books";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/books" element={<Books />} />
      </Routes>
    </>
  );
}

export default App;
