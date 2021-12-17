import styled from "styled-components";

export const UserPhotoPost = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 40rem) {
    grid-template-columns: 1fr;
  }

  .file {
    margin-bottom: 1rem;
  }

  .preview {
    border-radius: 1rem;
    background-size: cover;
    background-position: center center;

    &::after {
      content: "";
      display: block;
      height: 0;
      padding-bottom: 100%;
    }
  }
`;
