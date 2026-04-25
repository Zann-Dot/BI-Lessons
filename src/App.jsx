import Movies from "./lessons/BI1.1 CW/Movies";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Movies />} />
      </Routes>
    </>
  );
}

export default App;
