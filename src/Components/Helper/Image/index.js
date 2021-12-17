import React from "react";
import * as C from "./styles";

const Images = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = React.useState(true);

  function handleLoad({ target }) {
    setSkeleton(false);
    target.style.opacity = 1;
  }

  return (
    <C.Image>
      {skeleton && <C.Skeleton></C.Skeleton>}
      <img onLoad={handleLoad} src="" alt="" {...props} />
    </C.Image>
  );
};

export default Images;
