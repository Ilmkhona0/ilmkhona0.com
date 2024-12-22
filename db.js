'use strict';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Ensure you have dotenv installed and configured

const connectionString = process.env.MONGO_URI || 'mongodb://localhost:27017/ilmhona0';

const connectDB = async () => {
    try {
        await mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    }
};

export default connectDB;