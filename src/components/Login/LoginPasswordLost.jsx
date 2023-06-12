import React from "react";
import InputForm from "../Forms/InputForm";
import useForm from "../../hooks/useForm";
import ButtonForm from "../Forms/ButtonForm";
import useFetch from "../../hooks/useFetch";
import { lostPassword } from "../../api";
import ErrorMsg from "../../Helpers/ErrorMsg";

export default function LoginPasswordLost() {
  const lostEmail = useForm();
  const { data, load, erro, request } = useFetch();

  async function handleSubmit(e) {
    e.preventDefault();

    if (lostEmail.validate()) {
      const { url, options } = lostPassword({ login: lostEmail.value, url: window.location.href.replace("perdeu", "resetar") });//O replace é para criar a rota que será enviada ao usuário com uma key que valida o reset na url, method GET, que fica valida apenas por 24 horas
      const { response, json } = await request(url,options);
    }
  }

  return (
    <section>
      <h1 className="title">Perdeu a senha</h1>
      {data ? (
        <p style={{color: '#4c1'}}>{data}</p>
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <InputForm label="Email / Usuário" nameId="email" type="text" {...lostEmail} />
            {load ? <ButtonForm disabled>Enviando...</ButtonForm> : <ButtonForm type="submit">Enviar email</ButtonForm>}
          </form>
          {erro && <ErrorMsg err={erro} />}
        </>
      )}
    </section>
  );
}
