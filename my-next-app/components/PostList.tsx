import { FC } from 'react';
import Link from 'next/link';
import styles from '../styles/modules/PostList.module.scss';

interface Post {
  id: number;
  title: string;
}

interface PostListProps {
  posts: Post[];
}

const PostList: FC<PostListProps> = ({ posts }) => {
  return (
    <div className={styles.postList}>
      {posts.map(post => (
        <div key={post.id} className={styles.postItem}>
          <Link href={`/posts/${post.id}`}>
            {post.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PostList;
