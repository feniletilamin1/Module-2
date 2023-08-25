import {Link, useNavigate } from "react-router-dom";

type ActionButtonsProps = {
  postId: number,
}

export default function ActionButtons(props: ActionButtonsProps) {
  const {postId} = props;
  const navigate = useNavigate();

  const deletePost = (id: number) => {
    fetch(`http://localhost:7070/posts/${id}`, {
        method: 'DELETE',
      })
      .catch(error => console.error(error));
    navigate(-1);
}


  return (
    <div className="action-buttons">
        <button onClick={() => {deletePost(postId)}} className="action-buttons__btn">Удалить</button>
        <Link to={`/update/${postId}`}>
          <button className="action-buttons__btn">Изменить</button>
        </Link>
    </div>
  )
}
