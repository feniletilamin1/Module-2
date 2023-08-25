import { Link } from 'react-router-dom';
import Post from './Post';
import { PostType } from '../../types/PostType';

type PostProps = {
  posts: PostType[];
}

export default function Posts(props: PostProps) {
    const { posts } = props;
    return (
      <>
        <Link to="/new">
          <button className="btn-new-post">Добавить пост</button>
        </Link>
        <div className="posts">
          {posts.map(post =>  (
            <div key={post.id} className="post-wrapper">
              <Post post={post}/>
              <Link to={`/post/${post.id}`}>
                <button  className="btn-more">Подробнее</button>
              </Link>
            </div>
          ))}
        </div>
      </>
    )
}
