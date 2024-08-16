import type { NextApiRequest, NextApiResponse } from 'next';

const API_POST_URL = 'https://jsonplaceholder.typicode.com/posts';
const API_COMMENTS_URL = 'https://jsonplaceholder.typicode.com/posts';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  
  try {
    const postResponse = await fetch(`${API_POST_URL}/${id}`);
    const post = await postResponse.json();

    const commentsResponse = await fetch(`${API_POST_URL}/${id}/comments`);
    const comments = await commentsResponse.json();

    res.status(200).json({ post, comments });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch post and comments' });
  }
}
