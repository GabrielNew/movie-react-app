import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Favorites from "../Favorites/Favorites";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { MovieProvider } from "../../contexts/MovieContext";

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
      <Footer />
    </MovieProvider>
  );
}

export default App;
