import {  BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Components/home"
import Player from "./Components/player"
import Playing from "./Components/playing";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/player" element={<Player />} />
          <Route path="/playing" element={<Playing />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
