const API_BASE_URL = 'http://localhost:3000';

// Функция для получения всех постов с пагинацией

export const fetchPosts = async (pages: number = 1): Promise<any[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/posts?page=${pages}`);
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error(error);
    return [];
  }
};

// Функция для получения одного поста и комментариев
export const fetchPostAndComments = async (id: number): Promise<{ post: any; comments: any[] }> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/posts/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch post and comments');
    }
    const { post, comments } = await response.json();
    return { post, comments };
  } catch (error) {
    console.error(error);
    return { post: null, comments: [] };
  }
};
