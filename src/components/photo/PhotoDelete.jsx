import { photoDelete } from "../../api";
import useFetch from "../../hooks/useFetch";

export default function PhotoDelete({ id }) {
  const { load, request } = useFetch();

  async function handleClickDelete() {
    const confirm = window.confirm("Tem certeza que deseja deletar ?");

    if (!confirm) return;

    const { url, options } = photoDelete();

    const { response } = await request(url, options);

    if (response.ok) {
      window.location.reload();
    }
  }

  return (
    <>
      {load ? (
        <button className="btn-photo-delete" disabled>
          Deletando...
        </button>
      ) : (
        <button className="btn-photo-delete" onClick={handleClickDelete}>
          Deletar
        </button>
      )}
    </>
  );
}
