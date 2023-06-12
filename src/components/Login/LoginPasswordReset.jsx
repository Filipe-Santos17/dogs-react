import { useEffect, useState } from "react";
import ButtonForm from "../Forms/ButtonForm";
import InputForm from "../Forms/InputForm";
import useForm from "../../hooks/useForm";
import { resetPassword } from "../../api";
import useFetch from "../../hooks/useFetch";
import ErrorMsg from "../../Helpers/ErrorMsg";
import { useNavigate } from "react-router-dom";

export default function LoginPasswordReset() {
  const [login, setLogin] = useState("");
  const [key, setKey] = useState("");
  const newPassword = useForm();
  const { data, load, erro, request } = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key");
    const login = params.get("login");

    if (key) {
      setKey(key);
    }

    if (login) {
      setLogin(login);
    }
  }, []);

  async function handleSubmitSenha(e) {
    e.preventDefault();

    if (!newPassword.validate()) return;
    
    const { url, options } = resetPassword({ login, key, password: newPassword.value });

    const { response, json } = await request(url, options);

    if (response.ok) {
      navigate("/login");
    }
  }

  return (
    <div>
      <h1 className="title">Resetar a senha</h1>
      <form onSubmit={handleSubmitSenha}>
        <InputForm label={"Nova Senha"} type={"password"} nameId={"password"} {...newPassword} />
        {load ? <ButtonForm disabled>Resetando...</ButtonForm> : <ButtonForm type="submit">Resetar</ButtonForm>}
      </form>
      {erro && <ErrorMsg err={erro} />}
    </div>
  );
}
