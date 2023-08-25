import Posts from "../components/Posts/Posts";
import { PostType } from '../types/PostType';

type HomeProps = {
  posts: PostType[]
  loading: boolean,
  eror: Error | null,
}

export default function Home(props: HomeProps) {
  const {loading, eror, posts } = props;
  return (
    <>
      {loading && <p>Loading...</p>}
      {eror && <p>Ошибка: {eror.message}</p>}
      {!loading && !eror && <Posts posts={posts}/>}
    </>
  )
}
