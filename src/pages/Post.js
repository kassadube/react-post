import PostsList from "../features/posts/PostsList";
import AddPostForm from "../features/posts/AddPostForm";
function Post() {
  return (
    <main className="App">
      <AddPostForm />
        <PostsList />
    </main>
  );
}

export default Post;