import {useNavigate, useParams } from "react-router-dom";
import GoHome from "../components/GoHome";
import { useRef } from "react";
import { PostType } from "../types/PostType";
import Post from "../components/Posts/Post";
import NotFound from "../components/NotFound";
import React from "react";

type UpdatePostProps = {
    posts: PostType[]
}

export default function UpdatePost (props: UpdatePostProps) {
    const { id } = useParams();
    const { posts } = props;
    const navigate = useNavigate();
    const textAreaElement = useRef<HTMLTextAreaElement | null>(null);
    const post = posts.find(item => item.id === Number(id));
    
    if(!id || !post)
        return <NotFound />
    
    const updatePost = (id: number, text: string | undefined) => {
        if (!text)
            text = "";

        const content = {
            id: id,
            content: text,
        }

        fetch(`http://localhost:7070/posts/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(content),
          })
          .catch(error => console.error(error));
        navigate(-1);
      }

    return (
       <>
        <GoHome />
        <form action="/#" className="post-form">
            <textarea ref={textAreaElement} name="content" className="post-form__textarea"></textarea>
            <button onClick={(e) => {e.preventDefault(); updatePost(Number(id), textAreaElement.current?.value);}} type="submit" className="post-form__submit">Изменить пост</button>
        </form>
        <Post post={post}/>
       </>
    )
}
