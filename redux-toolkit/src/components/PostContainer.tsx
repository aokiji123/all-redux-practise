import React from 'react';
import {postAPI} from "../services/PostService";
import PostItem from "./PostItem";
import {IPost} from "../store/models/IPost";

const PostContainer = () => {
  const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(15)
  const [createPost, {}] = postAPI.useCreatePostMutation()
  const [updatePost, {}] = postAPI.useUpdatePostMutation()
  const [removePost, {}] = postAPI.useDeletePostMutation()

  const handleCreate = async () => {
    const title = prompt()
    await createPost({ title, body: title } as IPost)
  }

  const handleUpdate = (post: IPost) => {
    updatePost(post)
  }

  const handleRemove = (post: IPost) => {
    removePost(post)
  }

  return (
    <div>
      <div className="post__list">
        <button onClick={handleCreate}>Add new post</button>
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>Error ocured...</h1>}
        {posts && posts.map((post) =>
          <PostItem remove={handleRemove} update={handleUpdate} key={post.id} post={post} />
        )}
      </div>
    </div>
  );
};

export default PostContainer;
