import { FC } from 'react';
import { Post, Comment } from '../types';
import styles from '../styles/modules/PostItem.module.scss';

interface PostItemProps {
  post: Post;
  comments: Comment[];
}

const PostItem: FC<PostItemProps> = ({ post, comments }) => {
    console.log(post)
  return (
    <div className={styles.postItem}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <div className={styles.comments}>
        {comments.map(comment => (
          <div key={comment.id} className={styles.comment}>
            <p><strong>{comment.name}</strong></p>
            <p>{comment.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostItem;
