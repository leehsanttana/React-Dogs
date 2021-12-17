import styled from "styled-components";
import visualizacao from "../../../Assets/visualizacao-black.svg";

export const PhotoContent = styled.section`
  margin: auto;
  height: ${(props) => (props.single ? "auto" : "36rem")};
  border-radius: 0.2rem;
  background: #fff;
  display: grid;
  grid-template-columns: ${(props) => (props.single ? "1fr" : "36rem 20rem")};
  grid-template-rows: auto 1fr auto;
  overflow: hidden;
  opacity: 0;
  transform: scale(0.8);
  animation: scaleUp 0.3s forwards;

  .single {
    grid-template-columns: 1fr;
  }

  @keyframes scaleUp {
    to {
      opacity: initial;
      transform: initial;
    }
  }

  @media (max-width: 64rem) {
    height: auto;
    max-height: calc(100vh - 4rem);
    overflow-y: auto;
    grid-template-columns: minmax(20rem, 40rem);
  }
`;

export const PhotoContentImage = styled.div`
  grid-row: ${(props) => (props.single ? "1" : "1 / 4")};

  img {
    border-radius: ${(props) => (props.single ? ".4rem" : "0")};
    overflow: ${(props) => (props.single ? "hidden" : "auto")};
  }

  @media (max-width: 64rem) {
    grid-row: 1;
  }
`;

export const PhotoContentDetails = styled.div`
  padding: ${(props) => (props.single ? "1rem 0px 0px" : "2rem 2rem 0 2rem")};

  .comments {
    padding: 0 2rem;
  }

  .author {
    opacity: 0.5;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  a:hover {
    text-decoration: underline;
  }

  .views::before {
    content: "";
    display: inline-block;
    width: 16px;
    height: 10px;
    margin-right: 0.5rem;
    background: url(${visualizacao}) no-repeat;
  }

  .attributes {
    display: flex;
    font-size: 1.125rem;
    font-weight: bold;
    margin-top: 1rem;
    margin-bottom: 2rem;

    li {
      margin-right: 2rem;

      &::before {
        content: "";
        display: inline-block;
        height: 20px;
        margin-right: 0.5rem;
        position: relative;
        top: 3px;
        width: 2px;
        background: #333;
        margin-top: 5px;
      }
    }
  }
`;
