import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Menu, SceneMaker, Tutorial } from "./Engine";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/engine" element={<SceneMaker />} />
      </Routes>
    </>
  );
}
export default App;
