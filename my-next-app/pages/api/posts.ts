// /pages/api/posts.ts
import type { NextApiRequest, NextApiResponse } from 'next';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';
const ITEMS_PER_PAGE = 10;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { page = 1 } = req.query;
  const pageNumber = parseInt(page as string, 10);

  try {
    const response = await fetch(API_URL);
    const allPosts = await response.json();

    const startIndex = (pageNumber - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedPosts = allPosts.slice(startIndex, endIndex);

    res.status(200).json(paginatedPosts);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch posts' });
  }
}
