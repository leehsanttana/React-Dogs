import React from "react";
import { Link } from "react-router-dom";

import * as C from "./styles";
import "../../styles.css";

import { ReactComponent as Dogs } from "../../Assets/dogs.svg";

import { UserContext } from "../../UserContext";

const Header = () => {
  const { data, userLogout } = React.useContext(UserContext);
  return (
    <C.Header>
      <nav className="container">
        <Link className="logo" to="/" aria-label=" Dogs - Home">
          <Dogs />
        </Link>
        {data ? (
          <Link className="login" to="/account">
            {data.nome}
          </Link>
        ) : (
          <Link className="login" to="/login">
            Login / Criar
          </Link>
        )}
      </nav>
    </C.Header>
  );
};

export default Header;
