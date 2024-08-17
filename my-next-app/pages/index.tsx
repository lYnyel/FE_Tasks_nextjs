// /pages/index.tsx
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import PostList from '../components/PostList';
import { fetchPosts } from '../utils/api';
import { Post } from '../types';

interface Props {
  posts: Post[];
  page: number;
  totalPages: number;
}

const HomePage: NextPage<Props> = ({ posts, page, totalPages }) => {
  const router = useRouter();

  const handlePagination = (newPage: number) => {
    router.push(`/?page=${newPage}`);
  };

  return (
    <div>
      <h1>Posts</h1>
      <PostList posts={posts} />

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <button 
          onClick={() => handlePagination(page - 1)} 
          disabled={page <= 1}
        >
          Previous
        </button>
        <span>Page {page} of {totalPages}</span>
        <button 
          onClick={() => handlePagination(page + 1)} 
          disabled={page >= totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { page = '1' } = context.query;
  const pageNumber = parseInt(page as string, 10);
  const postsPerPage = 10;

  const posts = await fetchPosts(pageNumber, postsPerPage);
  
  console.log('Posts on page:', pageNumber, posts);
  
  const totalPages = Math.ceil(100 / postsPerPage); 

  return {
    props: {
      posts,
      page: pageNumber,
      totalPages,
    },
  };
};

export default HomePage;
