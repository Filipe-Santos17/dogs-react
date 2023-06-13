import { Suspense, lazy, useEffect } from "react";
import Head from "../../Helpers/Head";
import useFetch from "../../hooks/useFetch";
import { getDataEst } from "../../api";
import Loading from "../../Helpers/Loading";
import ErrorMsg from "../../Helpers/ErrorMsg";
//lazy para quando for utilizar bibliotecas pesadas
const UserStatsGraphs = lazy(() => import("./UserStatsGraphs"))

export default function UserEstatisticas() {
  const { data, load, erro, request } = useFetch();

  useEffect(() => {
    async function getData() {
      const { url, options } = getDataEst();
      await request(url, options);
    }

    getData();
  }, [request]);

  if (load) {
    return <Loading />;
  }

  if (erro) {
    return <ErrorMsg err={erro} />;
  }

  if (data) {
    return (
      // Suspense é um container react para carregar elementos do lazy
      <Suspense fallback={<div></div>}>
        <Head title={"Estatístcas"} />
        <UserStatsGraphs data={data}/>
      </Suspense>
    );
  } else {
    return null;
  }
}
