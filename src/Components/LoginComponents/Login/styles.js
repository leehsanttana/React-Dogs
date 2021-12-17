import styled from "styled-components";
import LoginImage from "../../../Assets/login.jpg";
export const Login = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  gap: 2rem;

  &::before {
    content: "";
    display: block;
    background: url(${LoginImage}) no-repeat, center;
    background-size: cover;
  }

  .forms {
    max-width: 30rem;
    padding: 1rem;
  }

  @media (max-width: 40rem) {
    grid-template-columns: 1fr;

    &::before {
      display: none;
    }

    .forms {
      max-width: 100%;
    }
  }
`;
