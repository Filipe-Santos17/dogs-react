import React, { useEffect, useState } from "react";
import FeedModal from "./FeedModal";
import FeedPhotos from "./FeedPhotos";

export default function UserFeed({ user }) {
  const [modalPhoto, setModalPhoto] = useState(null);
  const [infinite, setInfinite] = useState(true);
  const [pages, setPages] = useState([1, 2]);

  useEffect(() => {
    //wheel - evento de girar a roda do mouse
    let wait = false;

    function inifiniteScroll() {
      const scroll = window.scrollY; //Valor do scroll feito pelo usuário
      const heigth = document.body.offsetHeight - window.innerHeight; //total de altura da tela

      if (scroll > heigth * 0.75 && !wait) {
        setPages((pages) => [...pages, pages.length + 1]);
        wait = true
        setTimeout(() => {
          wait = false
        }, 500)
      }
    }

    ["wheel", "scroll"].forEach((typeEvent) => window.addEventListener(typeEvent, inifiniteScroll));

    return () => {
      ["wheel", "scroll"].forEach((typeEvent) => window.removeEventListener(typeEvent, inifiniteScroll));
    };
  }, [infinite]);

  return (
    <div>
      {modalPhoto && <FeedModal photo={modalPhoto} setPhoto={setModalPhoto} />}
      {pages.map((page) => (
        <FeedPhotos key={page} user={user} total={6} page={page} setPhoto={setModalPhoto} setInfinite={setInfinite} />
      ))}
    </div>
  );
}
