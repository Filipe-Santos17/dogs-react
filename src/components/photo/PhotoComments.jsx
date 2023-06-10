import { useContext, useState } from "react";
import { UserContext } from "../../userContext";
import PhotoCommentsForm from "./PhotoCommentsForm";

export default function PhotoComments({ id, comments }) {
  const [comment, setComment] = useState(comments);

  const { login } = useContext(UserContext);

  return (
    <>
      <ul className="box-comments">
        {comment.map((comm) => (
          <li key={comm.comment_ID}>
            <b>{comm.comment_author}: </b>
            <span>{comm.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <PhotoCommentsForm id={id} comments={comments} setComments={setComment}/>}
    </>
  );
}
