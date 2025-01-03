import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Favorites from "../Favorites/Favorites";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { MovieProvider } from "../../contexts/MovieContext";
import Login from "../Login/Login";
import CreateAccount from "../CreateAccount/CreateAccount";
import NotFoundPage404 from "../NotFoundPage404/NotFoundPage";

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/login" element={<Login />} />
          <Route path="/CreateAccount" element={<CreateAccount />} />
          <Route path="*" element={<NotFoundPage404 />} />
        </Routes>
      </main>
      <Footer />
    </MovieProvider>
  );
}

export default App;
