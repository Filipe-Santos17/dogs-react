import { useContext } from "react";
import InputForm from "../Forms/InputForm";
import ButtonForm from "../Forms/ButtonForm";
import ErrorMsg from "../../Helpers/ErrorMsg";
import useForm from "../../hooks/useForm";
import { userPost } from "../../api";
import { UserContext } from "../../userContext";
import useFetch from "../../hooks/useFetch";

export default function LoginCreate() {
  const username = useForm();
  const email = useForm("email");
  const password = useForm();

  const { load, erro, request } = useFetch();

  const { userLogin } = useContext(UserContext);

  async function handleSubmit(e) {
    e.preventDefault();

    if (username.validate() && password.validate() && email.validate()) {
      const { url, options } = userPost({
        username: username.value,
        email: email.value,
        password: password.value,
      });

      const { response, json } = await request(url, options);

      if (response.ok) {
        userLogin(username.value, password.value);
      }
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <InputForm label="Usuário" type="text" nameId="username" {...username} />
        <InputForm label="Email" type="email" nameId="email" {...email} />
        <InputForm label="Senha" type="password" nameId="password" {...password} />
        {load ? (<ButtonForm disabled>Cadastrando...</ButtonForm>) : (<ButtonForm>Cadastrar</ButtonForm>)}
        <ErrorMsg err={erro}/>
      </form>
    </section>
  );
}
