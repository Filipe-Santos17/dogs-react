import { useContext, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../userContext";

import { ReactComponent as GridSvg } from "../assets/grid.svg"; //Assim o React faz o create element
import { ReactComponent as AdicionarPlus } from "../assets/adicionarPlus.svg";
import { ReactComponent as Tabelas } from "../assets/tabelas.svg";
import { ReactComponent as Sair } from "../assets/sair.svg";
import useMedia from "../hooks/useMedia";

export default function UserHeaderNav() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const { userLogout } = useContext(UserContext);
  const navigate = useNavigate();

  const mobile = useMedia("(max-width: 40rem)");

  const { pathname } = useLocation();

  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  function handleLogout() {
    userLogout();
    navigate("/login");
  }

  return (
    <>
      {mobile && <button className={`mobile-button ${mobileMenu ? "mobile-menu-active" : ""}`} title="menu" aria-label="menu" onClick={() => setMobileMenu(!mobileMenu)}></button>}
      <nav className={`${mobile ? "nav-mobile" : "nav"} ${mobileMenu ? "mobile-active" : ""}`}>
        <NavLink to="/conta" end>
          <GridSvg />
          {mobile && "Minhas Fotos"}
        </NavLink>
        <NavLink to="/conta/estatisticas">
          <Tabelas />
          {mobile && "Estatísticas"}
        </NavLink>
        <NavLink to="/conta/postar">
          <AdicionarPlus />
          {mobile && "Adicionar Foto"}
        </NavLink>
        <button onClick={handleLogout}>
          <Sair />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
}
