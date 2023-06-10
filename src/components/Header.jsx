import { useContext } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Dogs } from "../assets/logo.svg";
import { UserContext } from "../userContext";

export default function Header() {
  const { data } = useContext(UserContext);

  return (
    <header className="header">
      <nav className="container">
        <Link to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {data ? (
          <Link to="/account" className="login-link">
            {data.name}
          </Link>
        ) : (
          <Link to="/login" className="login-link">
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
}
