'use strict';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Ensure you have dotenv installed and configured

const connectionString = process.env.MONGO_URI;
console.log('Connection String:', connectionString); // Debugging statement

const connectDB = async () => {
    try {
        console.log('Attempting to connect to MongoDB...'); // Debugging statement
        await mongoose.connect(connectionString);
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    }
};

export default connectDB;