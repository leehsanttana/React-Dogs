import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import * as C from "./styles";
import { UserContext } from "../../../UserContext";
import useMedia from "../../../Hooks/useMedia";
import { ReactComponent as MinhasFotos } from "../../../Assets/feed.svg";
import { ReactComponent as AdicionarFotos } from "../../../Assets/adicionar.svg";
import { ReactComponent as Estatisticas } from "../../../Assets/estatisticas.svg";
import { ReactComponent as Sair } from "../../../Assets/sair.svg";

const UserHeaderNav = () => {
  const mobile = useMedia("(max-width: 40rem)");
  const { userLogout } = React.useContext(UserContext);
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { pathname } = useLocation();

  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <C.UserHeaderNav>
      {mobile && (
        <button
          aria-label="Menu"
          className={`mobile-button ${mobileMenu && "mobile-button-active"}`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav
        className={`${mobile ? "nav-mobile" : "nav-default"} ${
          mobileMenu && "nav-mobile-active"
        }`}
      >
        <NavLink to="/account" end>
          <MinhasFotos />
          {mobile && "Minhas Fotos"}
        </NavLink>
        <NavLink to="/account/post">
          <AdicionarFotos />
          {mobile && "Adicionar Foto"}
        </NavLink>
        <NavLink to="/account/stats">
          <Estatisticas />
          {mobile && "Estatísticas"}
        </NavLink>
        <button onClick={userLogout}>
          <Sair />
          {mobile && "sair"}
        </button>
      </nav>
    </C.UserHeaderNav>
  );
};

export default UserHeaderNav;
