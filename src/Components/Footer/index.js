import React from "react";
import * as C from "./styles";
import { ReactComponent as Dogs } from "../../Assets/dogs-footer.svg";

const Footer = () => {
  return (
    <C.Footer>
      <Dogs />
      <p>Dogs. Alguns direito reservados</p>
    </C.Footer>
  );
};

export default Footer;
