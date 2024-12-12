import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Favorites from "../Favorites/Favorites";
import NavBar from "../../components/NavBar/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
