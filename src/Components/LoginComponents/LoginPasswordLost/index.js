import React from "react";
import * as C from "./styles";
import Input from "../../Forms/Input";
import Button from "../../Forms/Button";
import useForm from "../../../Hooks/useForm";
import useFetch from "../../../Hooks/useFetch";
import Error from "../../Helper/Error";
import Head from "../../Helper/Head";
import { PASSWORD_LOST } from "../../../api";

const LoginPasswordLost = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace("lost", "reset")
      });
      const { json } = await request(url, options);
    }
  }

  return (
    <C.LoginPasswordLost className="animeLeft">
      <Head title="Perdeu sua senha?" />
      <h1 className="title">Perdeu a Senha?</h1>
      {data ? (
        <p style={{ color: "#4c1" }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="login" {...login} />
          {loading ? (
            <Button disabled>Enviando</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
        </form>
      )}

      <Error error={error} />
    </C.LoginPasswordLost>
  );
};

export default LoginPasswordLost;
