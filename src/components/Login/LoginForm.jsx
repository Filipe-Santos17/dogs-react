import { useContext } from "react";
import { Link } from "react-router-dom";
import InputForm from "../Forms/InputForm";
import ButtonForm from "../Forms/ButtonForm";

import ErrorMsg from "../../Helpers/ErrorMsg";

import useForm from "../../hooks/useForm";

import { UserContext } from "../../userContext";

export default function LoginForm() {
  // const [login, setLogin] = React.useState({
  //   username: "",
  //   password: "",
  // });
  //
  // value={login.username}
  // changeFunc={handleDataLogin}
  //
  // function handleDataLogin({ currentTarget }) {
  //   const { name, value } = currentTarget;
  //   setLogin({ ...login, [name]: value });
  // }

  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = useContext(UserContext);

  async function handleSubmit(e) {
    e.preventDefault();

    //Impede o submit se a validação não estiver correta
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className="form" onSubmit={handleSubmit}>
        <InputForm label="Usuário" type="text" nameId="username" {...username} />
        <InputForm label="Senha" type="password" nameId="password" {...password} />
        {loading ? <ButtonForm disabled>Carregando...</ButtonForm> : <ButtonForm type="submit">Entrar</ButtonForm>}
        <ErrorMsg err={error} />
      </form>
      <Link to={"/login/perdeu/"} className="perdeu">Perdeu a senha</Link>
      <div className="cadastro">
        <h2 className="sub-title">Cadastre-se</h2>
        <p>Ainda não possui conta ? Cadastre-se no site</p>
        <Link to={"/login/create"} className="btn">Cadastro</Link>
      </div>
    </section>
  );
}
