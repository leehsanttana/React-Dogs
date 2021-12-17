import React from "react";
import { Routes, Route } from "react-router-dom";
import { UserContext } from "../../../UserContext";
import Feed from "../../FeedComponents/Feed";
import UserPhotoPost from "../UserPhotoPost";
import UserStats from "../UserStats";
import NotFound from "../../NotFound";
import UserHeader from "../UserHeader";
import Head from "../../Helper/Head";
import * as C from "./styles";
const User = () => {
  const { data } = React.useContext(UserContext);

  return (
    <C.User className="container">
      <Head title="Minha Conta" />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="/post" element={<UserPhotoPost />} />
        <Route path="/stats" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </C.User>
  );
};

export default User;
