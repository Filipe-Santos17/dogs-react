import { Link } from "react-router-dom";
import PhotoComments from "./PhotoComments";
import { useContext } from "react";
import { UserContext } from "../../userContext";
import PhotoDelete from "./PhotoDelete";
import Image from "../../Helpers/Image";

export default function PhotoContent({ data, singlePhoto = false }) {
  const user = useContext(UserContext);
  const { photo, comments } = data;

  return (
    <div className={`modal-photo ${singlePhoto ? 'modal-photo-single' : ''}`}>
      <div className="modal-photo-img">
        <Image src={photo.src} alt={photo.title}/>
      </div>
      <div className="modal-photo-details">
        <div>
          <p className="modal-photo-author">
            {user.data && user.data.username === photo.author ? <PhotoDelete id={photo.id} /> : <Link to={`/perfil/${photo.autor}`}>@{photo.author}</Link>}
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
