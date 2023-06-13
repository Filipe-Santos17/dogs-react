import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InputForm from "../Forms/InputForm";
import ButtonForm from "../Forms/ButtonForm";
import useForm from "../../hooks/useForm";
import useFetch from "../../hooks/useFetch";
import { photoPost } from "../../api";
import ErrorMsg from "../../Helpers/ErrorMsg";
import Head from "../../Helpers/Head";

export default function UserPhotoPost() {
  const nome = useForm();
  const peso = useForm("number");
  const idade = useForm("number");
  const [img, setImg] = useState({});
  const { data, load, erro, request } = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      navigate("/conta");
    }
  }, [data, navigate]);

  function handleImgChange({ currentTarget }) {
    setImg({
      raw: currentTarget.files[0],
      preview: URL.createObjectURL(currentTarget.files[0]),
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();

    formData.append("img", img.raw);
    formData.append("nome", nome.value);
    formData.append("peso", peso.value);
    formData.append("idade", idade.value);

    const token = localStorage.getItem("token");

    const { url, options } = photoPost(formData, token);

    request(url, options);
  }

  return (
    <>
      <Head title={"Poste sua Foto"} />
      <section className="animeLeft photopost">
        <form onSubmit={handleSubmit}>
          <InputForm label="Nome" type="text" nameId="nome" {...nome} />
          <InputForm label="Peso" type="number" nameId="peso" {...peso} />
          <InputForm label="Idade" type="number" nameId="idade" {...idade} />
          <input type="file" name="img" id="img" onChange={handleImgChange} />
          {load ? <ButtonForm disabled>Enviando</ButtonForm> : <ButtonForm>Enviar</ButtonForm>}
          <ErrorMsg err={erro} />
        </form>
        <div>{img.preview && <div className="preview" style={{ backgroundImage: `url('${img.preview}')` }}></div>}</div>
      </section>
    </>
  );
}
