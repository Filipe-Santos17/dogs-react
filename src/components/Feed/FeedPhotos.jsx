import { useEffect } from "react";
import FeedPhotosItem from "./FeedPhotosItem";
import useFetch from "../../hooks/useFetch";
import { photosGet } from "../../api";
import ErrorMsg from "../../Helpers/ErrorMsg";
import Loading from "../../Helpers/Loading";

export default function FeedPhotos({user, page, setPhoto, total, setInfinite}) {
  const { data, load, erro, request } = useFetch();

  useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = photosGet({ page, total, user});
      const { response, json } = await request(url, options);

      if(response && response.ok && json.length < total){
        setInfinite(false)
      }
    }

    fetchPhotos();
  }, [request, user, setInfinite, page, total]);

  if (erro) {
    return <ErrorMsg err={erro} />;
  }

  if (load) {
    return <Loading />;
  }

  if (data) {
    return (
      <ul className="feed animeLeft">
        {data.map((photoItem) => (
          <FeedPhotosItem key={photoItem.id} photo={photoItem} setPhoto={setPhoto}/>
        ))}
      </ul>
    );
  } else {
    return null;
  }
}
