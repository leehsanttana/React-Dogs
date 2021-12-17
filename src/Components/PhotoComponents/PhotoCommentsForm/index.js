import React from "react";
import * as C from "./styles";
import { ReactComponent as Enviar } from "../../../Assets/enviar.svg";
import useFetch from "../../../Hooks/useFetch";
import { COMMENT_POST } from "../../../api";
import Error from "../../Helper/Error";

const PhotoCommentsPhoto = ({ id, setComments, single }) => {
  const [comment, setComment] = React.useState("");
  const { request, error } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComment("");
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <C.PhotoCommentsPhoto onSubmit={handleSubmit} single={single}>
      <textarea
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button>
        <Enviar />
      </button>
      <Error error={error} />
    </C.PhotoCommentsPhoto>
  );
};

export default PhotoCommentsPhoto;
