import React from "react";
import * as C from "./styles";

const NotFound = () => {
  return (
    <C.NotFound className="container">
      <h1 className="title">Erro: 404</h1>
      <p>Página não encontrada.</p>
    </C.NotFound>
  );
};

export default NotFound;
