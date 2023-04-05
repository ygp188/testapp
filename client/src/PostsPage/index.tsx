import React from 'react';
import { ListGroup } from 'reactstrap';
import { usePostContext } from '../contexts/PostContext';
import OnePost from './OnePost';
import PostForm from './PostForm';

export default function PostsPage(): JSX.Element {
  const { posts } = usePostContext();
  return (
    <>
      <PostForm />
      <ListGroup>
        {posts.map((post) => (
          <OnePost key={post.id} post={post} />
        ))}
      </ListGroup>
    </>
  );
}
