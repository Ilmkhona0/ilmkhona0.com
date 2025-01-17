import http from 'node:http';
import fs from 'fs';
import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const hostname = 'localhost';
const port = process.env.PORT || 8000;

const connectionString = process.env.MONGO_URI;
console.log('MONGO_URI:', connectionString); // Debugging statement

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

// Connect to MongoDB
connectDB();

const server = http.createServer((req, res) => {
    console.log(`Received request for ${req.url}`); // Debugging statement

    if (req.url === '/' || req.url === '/home') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        fs.readFile(path.join(process.cwd(), 'Home', 'home.html'), (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('Error loading home.html');
            } else {
                res.end(data);
            }
        });
    } else if (req.url === '/styles.css') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/css');
        fs.readFile(path.join(process.cwd(), 'Home', 'styles.css'), (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('Error loading styles.css');
            } else {
                res.end(data);
            }
        });
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Page not found');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});