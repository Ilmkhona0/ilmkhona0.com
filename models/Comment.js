import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
    name: String,
    message: String,
    timestamp: { type: Date, default: Date.now }
});

export default mongoose.model('Comment', commentSchema);
