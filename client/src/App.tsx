import { Link, Outlet } from "react-router";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <img src="/" alt="" />
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/registration">Inscription</Link>
        </nav>
      </header>

      <Outlet />
    </>
  );
}

export default App;
