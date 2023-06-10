import { useState } from "react";
import { ReactComponent as EnviarBtn } from "../../assets/enviar-btn.svg";
import useFetch from "../../hooks/useFetch";
import { commentPost } from "../../api";
import ErrorMsg from "../../Helpers/ErrorMsg";

export default function PhotoCommentsForm({ id, comments, setComments}) {
  const { data, load, erro, request } = useFetch();
  const [comment, setComment] = useState();

  function handleComment({ currentTarget }) {
    setComment(currentTarget.value);
  }

  async function handleSubmit(e){
    e.preventDefault()

    const {url, options} = commentPost(id, {comment})
    const {response, json} = await request(url, options)

    if(response && response.ok){
      setComment('')
      setComments(comment => [...comment, json])
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea id="comente" name="comente" placeholder="Comente..." value={comment} onChange={handleComment}></textarea>
      <button>
        <EnviarBtn />
      </button>
      <ErrorMsg err={erro}/>
    </form>
  );
}
