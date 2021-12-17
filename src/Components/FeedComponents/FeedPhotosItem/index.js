import React from "react";
import * as C from "./styles";
import Image from "../../Helper/Image";

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  function handleClick() {
    setModalPhoto(photo);
  }

  return (
    <C.FeedPhotosItem onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} />
      <span className="views">{photo.acessos}</span>
    </C.FeedPhotosItem>
  );
};

export default FeedPhotosItem;
