import React from "react";
import * as C from "./styles";
import { PHOTO_DELETE } from "../../../api";
import useFecth from "../../../Hooks/useFetch";

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFecth();

  async function handleClick() {
    const confirm = window.confirm("Tem certeza que deseja deletar?");
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  }

  return (
    <>
      {loading ? (
        <C.PhotoDelete disabled>Carregando...</C.PhotoDelete>
      ) : (
        <C.PhotoDelete onClick={handleClick}>Deletar</C.PhotoDelete>
      )}
    </>
  );
};

export default PhotoDelete;
