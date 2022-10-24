import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Menu } from "./Engine";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Menu />} />
      </Routes>
    </>
  );
}
export default App;
