import { GetServerSideProps, NextPage } from 'next';
import PostList from '../../components/PostList';
import { Post } from '../../types';

interface Props {
  posts: Post[];
}

const HomePage: NextPage<Props> = ({ posts }) => {
  return (
    <div>
      <h1>Posts</h1>
      <PostList posts={posts} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/posts?page=1');
  const posts = await res.json();

  return {
    props: { posts },
  };
};

export default HomePage;
