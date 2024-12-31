import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.js';

dotenv.config();

const connectionString = process.env.MONGO_URI;

const addSampleUsers = async () => {
    try {
        await mongoose.connect(connectionString);
        console.log('MongoDB connected successfully');

        const users = [
            { name: 'John Doe', email: 'john@example.com' },
            { name: 'Jane Doe', email: 'jane@example.com' },
        ];

        await User.insertMany(users);
        console.log('Sample users added successfully');

        mongoose.connection.close();
    } catch (err) {
        console.error('Error adding sample users:', err);
        process.exit(1);
    }
};

addSampleUsers();