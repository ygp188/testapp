import React, { memo } from 'react';
import { Button, ListGroupItem } from 'reactstrap';
import { useHandlersContext } from '../contexts/PostContext';
import type { PostType } from '../types/PostTypes';

type OnePostProps = {
  post: PostType;
};

function OnePost({ post }: OnePostProps): JSX.Element {
  console.log('One post');
  const { deleteHandler } = useHandlersContext();
  return (
    <ListGroupItem>
      <h5>{post.title}</h5>
      <p>{post.body}</p>
      <Button onClick={() => deleteHandler(post.id)}>Delete</Button>
    </ListGroupItem>
  );
}

export default memo(OnePost);
