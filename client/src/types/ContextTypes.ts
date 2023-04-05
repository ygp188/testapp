import type { PostType } from './PostTypes';

export type PostContextType = {
  posts: PostType[];
};

export type HandlersContextType = {
  deleteHandler: (id: number) => void;
  addHandler: (e: React.ChangeEvent<HTMLFormElement>) => void;
};

export type ContextProviderPropsType = {
  children: React.ReactElement;
};
