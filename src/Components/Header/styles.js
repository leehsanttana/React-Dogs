import styled from "styled-components";
import usuario from "../../Assets/usuario.svg";

export const Header = styled.header`
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  position: fixed;
  width: 100%;
  z-index: 100;
  background: white;
  top: 0;
  left: 0;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .login {
    color: #333;
    display: flex;
    align-items: center;
  }

  .login::after {
    content: "";
    display: inline-block;
    width: 14px;
    height: 17px;
    background: url(${usuario}) no-repeat center center;
    margin-left: 0.5rem;
  }
`;
