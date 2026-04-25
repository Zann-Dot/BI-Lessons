import Movies from "./lessons/BI1.1 CW/Movies";
import Books from "./lessons/BI1.1 HW1/Books";
import Hotels from "./lessons/BI1.1 HW2/Hotels";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/books" element={<Books />} />
        <Route path="/hotels" element={<Hotels />} />
      </Routes>
    </>
  );
}

export default App;
