import {ReactElement } from 'react';
import { PostType } from '../../types/PostType';

type PostProps = {
    post: PostType,
    actionButtons?: ReactElement,
}

export default function Post(props: PostProps) {
    const {post, actionButtons} = props;
    const dateCreated = new Date(post.created);
    return (
        <div className="post">
            <h2 className="post__person-name">Иван Иванов</h2>
            <img src="https://i07.fotocdn.net/s129/2d0c508a75f0165d/gallery_s/2930767565.jpg" alt="avatar" className="post__image" />
            <p className="post__text">{dateCreated.toDateString()}</p>
            <p className="post__content">{post.content}</p>
            {actionButtons && actionButtons}
        </div>
  )
}
