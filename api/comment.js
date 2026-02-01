// api/comments.js
import connectDB from '../lib/db.js';
import Comment from '../models/Comment.js';

export default async function handler(req, res) {
  await connectDB();

  if (req.method === 'POST') {
    const comment = await Comment.create(req.body);
    return res.status(201).json(comment);
  }

  if (req.method === 'GET') {
    const comments = await Comment.find().sort({ timestamp: -1 });
    return res.status(200).json(comments);
  }

  res.status(405).end();
}
