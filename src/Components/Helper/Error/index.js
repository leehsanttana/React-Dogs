import React from "react";
import * as C from "./styles";

const Error = ({ error }) => {
  if (!error) return null;
  return <C.Error>{error}</C.Error>;
};

export default Error;
