import React, { useState } from "react";
import FeedModal from "./FeedModal";
import FeedPhotos from "./FeedPhotos";

export default function UserFeed() {
  const [modalPhoto, setModalPhoto] = useState(null);

  return (
    <div>
      {modalPhoto && <FeedModal photo={modalPhoto} setPhoto={setModalPhoto}/>}
      <FeedPhotos setPhoto={setModalPhoto} />
    </div>
  );
}
