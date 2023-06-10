import { Link } from "react-router-dom";
import PhotoComments from "./PhotoComments";

export default function PhotoContent({ data }) {
  const { photo, comments } = data;

  return (
    <div className="modal-photo">
      <div className="modal-photo-img">
        <img src={photo.src} alt={photo.title} />
      </div>
      <div className="modal-photo-details">
        <div>
          <p className="modal-photo-author">
            <Link to={`/perfil/${photo.autor}`}>@{photo.author}</Link>
            <span className="modal-photo-visualizacoes">{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className="modal-photo-atributos">
            <li>{photo.peso} kg</li>
            <li>
              {photo.idade} {photo.idade === 1 ? "ano" : "anos"}
            </li>
          </ul>
        </div>
      </div>
      <PhotoComments id={photo.id} comments={comments} />
    </div>
  );
}
