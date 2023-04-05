import React from 'react';
import { Button, Form, Input } from 'reactstrap';
import { useHandlersContext } from '../contexts/PostContext';

export default function PostForm(): JSX.Element {
  const { addHandler } = useHandlersContext();
  return (
    <div className="my-5">
      <Form onSubmit={addHandler}>
        <Input name="title" placeholder="title" />
        <Input name="body" placeholder="body" />
        <Button type="submit">Add post</Button>
      </Form>
    </div>
  );
}
