import React from "react";
import { Link } from "react-router-dom";
import * as C from "./styles";
import PhotoComments from "../PhotoComments";
import { UserContext } from "../../../UserContext";
import PhotoDelete from "../PhotoDelete";
import Image from "../../Helper/Image";

const PhotoContent = ({ data, single }) => {
  const user = React.useContext(UserContext);
  const { photo, comments } = data;
  return (
    <C.PhotoContent single={single}>
      <C.PhotoContentImage single={single}>
        <Image src={photo.src} alt={photo.title} />
      </C.PhotoContentImage>
      <C.PhotoContentDetails single={single}>
        <p className="author">
          {user.data && user.data.username === photo.author ? (
            <PhotoDelete id={photo.id} />
          ) : (
            <Link to={`/profile/${photo.author}`}>@{photo.author}</Link>
          )}

          <span className="views">{photo.acessos}</span>
        </p>
        <h1 className="title">
          <Link to={`/photo/${photo.id}`}>{photo.title}</Link>
        </h1>
        <ul className="attributes">
          <li>{photo.peso} kg</li>
          <li>{photo.idade === 1 ? "ano" : "anos"} </li>
        </ul>
      </C.PhotoContentDetails>
      <PhotoComments id={photo.id} comments={comments} single={single} />
    </C.PhotoContent>
  );
};

export default PhotoContent;
