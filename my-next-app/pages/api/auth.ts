import type { NextApiRequest, NextApiResponse } from 'next';

const users = [
  { username: 'user1', password: 'password1', id: 1 },
  { username: 'user2', password: 'password2', id: 2 },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      res.status(200).json({ userId: user.id });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
