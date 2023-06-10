import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { photoGet } from "../../api";
import ErrorMsg from "../../Helpers/ErrorMsg";
import Loading from "../../Helpers/Loading";
import PhotoContent from "../photo/photoContent";

export default function FeedModal({photo, setPhoto}) {
  const { data, erro, load, request } = useFetch();

  useEffect(() => {
    const { url, options } = photoGet(photo.id);

    request(url, options);
  }, [photo, request]);

  function handleClickOutSide({target, currentTarget}) {
    if(target === currentTarget){
      setPhoto(null)
    }
  }

  return (
    <div className="modal" onClick={handleClickOutSide}>
      <ErrorMsg err={erro} />
      {load && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
}
