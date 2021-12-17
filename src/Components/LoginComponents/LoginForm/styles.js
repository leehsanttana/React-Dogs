import styled from "styled-components";

export const LoginForm = styled.section`
  form {
    margin-bottom: 2rem;
  }

  .lost {
    display: inline-block;
    color: #666;
    padding: 0.5rem 0;
    line-height: 1;

    &::after {
      content: "";
      height: 1px;
      width: 100%;
      background: currentColor;
      display: block;
    }
  }
  div {
    margin-bottom: 4rem;

    p {
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
  }
`;
