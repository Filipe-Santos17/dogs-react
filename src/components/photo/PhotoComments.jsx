import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../userContext";
import PhotoCommentsForm from "./PhotoCommentsForm";

export default function PhotoComments({ id, comments }) {
  const [comment, setComment] = useState(comments);
  const BoxComments = useRef(null);

  const { login } = useContext(UserContext);

  useEffect(() => {
    BoxComments.current.scrollTop = BoxComments.current.scrollHeight;  //Scrolla até o final do bloco de coméntario
  }, [comment]);

  return (
    <>
      <ul className="box-comments" ref={BoxComments}>
        {comment.map((comm) => (
          <li key={comm.comment_ID}>
            <b>{comm.comment_author}: </b>
            <span>{comm.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <PhotoCommentsForm id={id} comments={comments} setComments={setComment} />}
    </>
  );
}
