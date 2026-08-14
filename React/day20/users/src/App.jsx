import Navbar from "./Component/Navbar";

import Home from "./pages/Home";
import Friend from "./pages/Friend";
import BlockList from "./pages/BlockList";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/friends" element={<Friend />} />
        <Route path="/blocklist" element={<BlockList />} />
      </Routes>
    </>
  );
}

export default App;