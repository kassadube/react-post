import { useDispatch, useSelector } from "react-redux";
import { useDebugValue, useEffect } from "react";
import { selectAllPosts, selectPostStatus, selectPostError, fetchPosts } from "./postsSlice";
import PostsExcerpt from "./PostsExcerpt";



const PostsList = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectAllPosts);
    const postStatus = useSelector(selectPostStatus);
    const error = useSelector(selectPostError);

    useEffect(() => {
        if (postStatus == 'idle') {
            dispatch(fetchPosts());
        }
    }, [postStatus, dispatch]);


    //console.log(posts);

    let content;
    if (postStatus == 'loading') {
        content = <p> Loading...</p>
    } else if (postStatus == 'succeeded') {
        const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
        content = orderedPosts.map((post, index) => <PostsExcerpt key={index} post={post} />);
    } else if (postStatus == 'failed') {

        content = <p> {error}</p>
    }


    return (
        <section>
            <h2>Posts</h2>
            {content}
        </section>
    );
}

export default PostsList;