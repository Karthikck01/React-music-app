import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Songs from "./pages/Songs";
import NavbarComponent from "./components/Navbar/Navbar";
import "./App.css";
import { Container } from "react-bootstrap";

import { AppContext } from "./Context/GlobalContext";
import { useContext } from "react";

function App() {
  const { darkMode } = useContext(AppContext);
  return (
    <>
      <NavbarComponent theme={darkMode ? "dark" : "light"} />
      <Container fluid className={darkMode ? "text-bg-dark" : "text-bg-light"}>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="songs" element={<Songs />} />
          </Routes>
        </Container>
      </Container>
    </>
  );
}

export default App;
