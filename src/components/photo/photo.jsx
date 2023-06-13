import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";
import { photoGet } from "../../api";
import ErrorMsg from "../../Helpers/ErrorMsg";
import Loading from "../../Helpers/Loading";
import PhotoContent from "./photoContent";
import Head from "../../Helpers/Head";

export default function Photo() {
  const { id } = useParams();
  const { data, load, erro, request } = useFetch();

  useEffect(() => {
    const { url, options } = photoGet(id);
    const { response, json } = request(url, options);
  }, [request, id]);

  if (erro) {
    return <ErrorMsg err={erro} />;
  }

  if (load) {
    return <Loading />;
  }

  if (data) {
    return (
      <>
        <Head title={data.photo.title} />
        <section className="container mainContainer">
          <PhotoContent data={data} singlePhoto={true} />
        </section>
      </>
    );
  }
  return null;
}
