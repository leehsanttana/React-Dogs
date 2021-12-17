import React from "react";
import * as C from "./styles";
import { Route, Routes, Navigate } from "react-router-dom";
import LoginForm from "../LoginForm/index";
import LoginCreate from "../LoginCreate";
import LoginPasswordLost from "../LoginPasswordLost";
import LoginPasswordReset from "../LoginPasswordReset";
import NotFound from "../../NotFound";
import { UserContext } from "../../../UserContext";

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/account" />;
  return (
    <C.Login className="animeLeft">
      <div className="forms">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="create" element={<LoginCreate />} />
          <Route path="lost" element={<LoginPasswordLost />} />
          <Route path="reset" element={<LoginPasswordReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </C.Login>
  );
};

export default Login;
