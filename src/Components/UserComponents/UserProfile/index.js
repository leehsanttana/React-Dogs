import React from "react";
import * as C from "./styles";
import { useParams } from "react-router-dom";
import Feed from "../../FeedComponents/Feed";
import Head from "../../Helper/Head";

const UserProfile = () => {
  const { user } = useParams();
  return (
    <C.UserProfile>
      <Head title={user} />
      <h1 className="title">{user}</h1>
      <Feed user={user} />
    </C.UserProfile>
  );
};

export default UserProfile;
