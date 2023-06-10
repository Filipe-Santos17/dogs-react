import React from "react";

const FeedPhotosItem = ({ photo, setPhoto}) => {

  function handleClick(){
    setPhoto(photo)
  }

  return (
    <li className="photo" onClick={handleClick}>
      <img src={photo.src} alt={photo.title} />
      <span className="visual">{photo.acessos}</span>
    </li>
  );
}

export default FeedPhotosItem