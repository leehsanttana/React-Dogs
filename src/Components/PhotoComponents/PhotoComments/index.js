import React from "react";
import * as C from "./styles";
import { UserContext } from "../../../UserContext";
import PhotoCommentsPhoto from "../PhotoCommentsForm";
const PhotoComments = (props) => {
  const { login } = React.useContext(UserContext);
  const [comments, setComments] = React.useState(() => props.comments);
  const commentsSection = React.useRef(null);

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments]);

  return (
    <C.PhotoComments ref={commentsSection} single={props.single}>
      <ul className="comments">
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}:</b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && (
        <PhotoCommentsPhoto
          id={props.id}
          setComments={setComments}
          single={props.single}
        />
      )}
    </C.PhotoComments>
  );
};

export default PhotoComments;
