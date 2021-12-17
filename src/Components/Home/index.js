import React from "react";
import * as C from "./styles";
import Feed from "../FeedComponents/Feed";
import Head from "../Helper/Head";

const Home = () => {
  return (
    <C.Home className="container">
      <Head
        title="Fotos"
        description="Home do site Dogs, com o feed de fotos."
      />
      <Feed />
    </C.Home>
  );
};

export default Home;
