import React from "react";
import Image from "../../Helpers/Image";

const FeedPhotosItem = ({ photo, setPhoto}) => {

  function handleClick(){
    setPhoto(photo)
  }

  return (
    <li className="photo" onClick={handleClick}>
      <Image src={photo.src} alt={photo.title}/>
      <span className="visual">{photo.acessos}</span>
    </li>
  );
}

export default FeedPhotosItem