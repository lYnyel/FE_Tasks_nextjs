import { GetServerSideProps, NextPage } from 'next';
import PostList from '../components/PostList';
import { fetchPosts } from '../utils/api';
import { Post } from '../types';

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
  const posts = await fetchPosts(1); // Загрузка постов для первой страницы

  return {
    props: { posts },
  };
};

export default HomePage;
