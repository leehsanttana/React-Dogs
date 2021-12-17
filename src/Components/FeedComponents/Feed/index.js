import React from "react";
import * as C from "./styles";
import FeedModal from "../FeedModal";
import FeedPhotos from "../FeedPhotos";
import PropTypes from "prop-types";

const Feed = ({ user }) => {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  const [pages, setPages] = React.useState([1]);
  const [infinite, setInfinite] = React.useState(true);

  React.useEffect(() => {
    let wait = false;
    function infinityScroll() {
      if (infinite) {
        const scroll = window.screenY;
        const height = document.body.offsetHeight - window.innerHeight;
        if (scroll > height * 0.75 && !wait) {
          setPages((pages) => [...pages, pages.length + 1]);
          wait = true;
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    }

    window.addEventListener("wheel", infinityScroll);
    window.addEventListener("scroll", infinityScroll);

    return () => {
      window.removeEventListener("wheel", infinityScroll);
      window.removeEventListener("scroll", infinityScroll);
    };
  }, [infinite]);

  return (
    <C.Feed>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      {pages.map((page) => (
        <FeedPhotos
          key={page}
          user={user}
          page={page}
          setModalPhoto={setModalPhoto}
          setInfinite={setInfinite}
        />
      ))}
    </C.Feed>
  );
};

Feed.defaultProps = {
  user: 0
};

Feed.prototype = {
  user: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ])
};

export default Feed;
