import styled from "styled-components";

export const PhotoComments = styled.section`
  overflow-y: auto;

  .comments {
    padding: ${(props) => (props.single ? "0" : "0 2rem")};
    word-break: break-word;

    li {
      margin-bottom: 0.5rem;
      line-height: 1.2;
    }
  }
`;
