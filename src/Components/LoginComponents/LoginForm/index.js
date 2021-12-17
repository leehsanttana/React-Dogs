import React from "react";
import { Link } from "react-router-dom";
import Input from "../../Forms/Input";
import Button from "../../Forms/Button";
import useForm from "../../../Hooks/useForm";
import Error from "../../Helper/Error";
import { UserContext } from "../../../UserContext";
import Head from "../../Helper/Head";
import * as C from "./styles";
import * as B from "../../Forms/Button/styles";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <C.LoginForm>
      <Head title="Login" />
      <h1 className="title">Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled> Carregando... </Button>
        ) : (
          <Button> Entrar </Button>
        )}
        <Error error={error && "Dados incorretos"} />
        <Link className="lost" to="/login/lost">
          Perdeu a senha?
        </Link>
      </form>

      <div>
        <h2 className="subtitle">Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <B.Button>
          <Link to="/login/create">Cadastrar</Link>
        </B.Button>
      </div>
    </C.LoginForm>
  );
};

export default LoginForm;
