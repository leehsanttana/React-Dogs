import React from "react";
import * as C from "./styles";
import UserHeaderNav from "../UserHeaderNav";
import { useLocation } from "react-router-dom";
const UserHeader = () => {
  const [title, setTitle] = React.useState("");
  const location = useLocation();

  React.useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case "/account/post":
        setTitle("Adicionar Foto");
        break;
      case "/account/stats":
        setTitle("Estatisticas");
        break;
      default:
        setTitle("Minha Conta");
    }
  }, [location]);

  return (
    <C.UserHeader>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </C.UserHeader>
  );
};

export default UserHeader;
