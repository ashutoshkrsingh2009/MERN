import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Favourite from "./components/Favourite";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/favourite" element={<Favourite />} />
      </Routes>
    </>
  );
}

export default App;