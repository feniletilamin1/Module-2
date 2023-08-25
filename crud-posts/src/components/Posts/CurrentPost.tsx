import Post from './Post'
import { PostType } from '../../types/PostType';
import { useParams } from 'react-router-dom';
import NotFound from '../NotFound';
import GoHome from '../GoHome';
import ActionButtons from '../ActionButtons';

type CurrentPostProps = {
    posts: PostType[],
}

export default function CurrentPost(props: CurrentPostProps) {
    const {posts} = props;
    const params = useParams();
    const { id } = params;

    if(!id)
        return <NotFound />

    const currentPost = posts.find(p => p.id === Number(id));
    
    if(!currentPost) {
        return <p>Loading...</p>
    }

    return (
        <>
            <GoHome />
            <Post actionButtons={<ActionButtons postId={Number(id)} />} post={currentPost}/>
        </>
    )
}
