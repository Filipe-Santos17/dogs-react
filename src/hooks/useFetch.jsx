import { useCallback, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [load, setLoad] = useState(null);
  const [erro, setErro] = useState(null);

  const request = useCallback(async (url, options) => {
    let response, json;

    try {
      setErro(null);
      setLoad(true);

      response = await fetch(url, options);
      json = await response.json();

      if (response.ok === false) {
        throw new Error(json.message);
      }
    } catch (err) {
      json = null;
      setErro(err.message);
    } finally {
      setData(json);
      setLoad(false);

      return { response, json };
    }
  }, []);

  return {
    data,
    load,
    erro,
    request
  }
};

export default useFetch;
