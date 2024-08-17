// /components/PostList.tsx
import { FC } from 'react';
import { Post } from '../types';
import Link from 'next/link';
import styles from '../styles/modules/PostList.module.scss';

interface PostListProps {
  posts: Post[];
}

const PostList: FC<PostListProps> = ({ posts }) => {
  return (
    <div className={styles.postList}>
      {posts.map((post) => (
        <div key={post.id} className={styles.post}>
          <Link href={`/posts/${post.id}`}>
            <h2>{post.title}</h2>
          </Link>
          <p>{post.body.substring(0, 100)}...</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
