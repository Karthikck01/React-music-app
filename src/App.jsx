import Home from "./pages/Home";
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
          <Home/>
          <Songs/>
        </Container>
      </Container>
    </>
  );
}

export default App;
