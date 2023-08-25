import {useRef } from "react"
import { useNavigate } from "react-router-dom";
import GoBackBtn from "./GoHome";

export default function PostForm() {

    const textAreaElement = useRef<HTMLTextAreaElement>(null);

    const navigate = useNavigate();

    const fetchData = (text: string) => {
        const post = {
            id: 0, content: text
        };
        fetch("http://localhost:7070/posts", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
          })
          .catch(error => console.error(error));
        navigate(-1);
    }

    const sendForm = () => {
        if (textAreaElement.current !== null) {
            fetchData(textAreaElement.current.value)
        }
    }
  return (
    <>
        <GoBackBtn />
        <form onSubmit={(e) => {e.preventDefault(); sendForm();} } className="post-form">
            <textarea ref={textAreaElement} name="content" className="post-form__textarea"></textarea>
            <button type="submit" className="post-form__submit">Добавить пост</button>
        </form>
    </>
  )
}
