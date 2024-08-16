import { GetServerSideProps, NextPage } from 'next';
import PostItem from '../../components/PostItem';
import { fetchPostAndComments } from '../../utils/api';
import { Post, Comment } from '../../types';

interface Props {
  post: Post;
  comments: Comment[];
}

const PostPage: NextPage<Props> = ({ post, comments }) => {
  return (
    <div>
      <PostItem post={post} comments={comments} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as { id: string };

  const { post, comments } = await fetchPostAndComments(parseInt(id));

  return {
    props: { post, comments },
  };
};

export default PostPage;
