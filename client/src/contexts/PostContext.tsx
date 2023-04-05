import axios from 'axios';
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type {
  HandlersContextType,
  ContextProviderPropsType,
  PostContextType,
} from '../types/ContextTypes';
import type { PostType } from '../types/PostTypes';

const PostContext = createContext<PostContextType | null>(null);
const HandlersContext = createContext<HandlersContextType | null>(null);

export const usePostContext = (): PostContextType => {
  const context = useContext(PostContext);
  if (!context) throw new Error('nope');
  return context;
};

export const useHandlersContext = (): HandlersContextType => {
  const context = useContext(HandlersContext);
  if (!context) throw new Error('nope');
  return context;
};

function PostContextProvider({ children }: ContextProviderPropsType): JSX.Element {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    axios<PostType[]>('/api/posts')
      .then(({ data }) => setPosts(data))
      .catch(console.log);
  }, []);

  const addHandler = useCallback((e: React.ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    axios
      .post<PostType>('/api/posts', Object.fromEntries(new FormData(e.target)))
      .then(({ data }) => setPosts((prev) => [data, ...prev]))
      .catch(console.log);
  }, []);

  const deleteHandler = useCallback((id: number): void => {
    axios
      .delete(`/api/posts/${id}`)
      .then(() => setPosts((prev) => prev.filter((el) => el.id !== id)))
      .catch(console.log);
  }, []);

  const postProviderValue = useMemo(() => ({ posts }), [posts]);
  const handlersProviderValue = useMemo(
    () => ({ addHandler, deleteHandler }),
    [addHandler, deleteHandler],
  );

  return (
    <HandlersContext.Provider value={handlersProviderValue}>
      <PostContext.Provider value={postProviderValue}>{children}</PostContext.Provider>
    </HandlersContext.Provider>
  );
}

export default PostContextProvider;
