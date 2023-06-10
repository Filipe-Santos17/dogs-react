import { useEffect, useState } from "react";
import UserHeaderNav from "./UserHeaderNav";
import { useLocation } from "react-router-dom";

export default function UserHeader() {
  const [title, setTitle] = useState("");
  const location = useLocation();

  useEffect(() => {
    const loc = location.pathname;

    switch (loc) {
      case "/conta/postar":
        setTitle('Poste sua Foto');
        break;
      case "/conta/estatisticas":
        setTitle('Estatísticas');
        break;
      default:
        setTitle("Minha conta");
    }
  }, [location]);
  return (
    <header className="header-user">
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
}
