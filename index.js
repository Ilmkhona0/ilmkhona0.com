import mongoose from 'mongoose';
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import path from 'path';
import Comment from './models/Comment.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from /Home folder
app.use(express.static(path.join(process.cwd(), 'Home')));

// MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

connectDB();

// Example item schema
const itemSchema = new mongoose.Schema({
  title: String
});
const Item = mongoose.model('Item', itemSchema);

// API: Get items
app.get('/api/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// API: Post comment
app.post('/api/comments', async (req, res) => {
  try {
    const comment = new Comment(req.body);
    await comment.save();
    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// API: Get comments
app.get('/api/comments', async (req, res) => {
  const comments = await Comment.find().sort({ timestamp: -1 });
  res.json(comments);
});

// Fallback: serve home.html for root
app.get('/', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'Home', 'home.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
