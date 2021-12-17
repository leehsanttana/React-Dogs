import React from "react";
import * as C from "./styles";
import useFetch from "../../../Hooks/useFetch";
import { PHOTO_GET } from "../../../api";
import Error from "../../Helper/Error";
import Loading from "../../Helper/Loading";
import PhotoContent from "../../PhotoComponents/PhotoContent";

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) setModalPhoto(null);
  }

  return (
    <C.FeedModal onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </C.FeedModal>
  );
};

export default FeedModal;
