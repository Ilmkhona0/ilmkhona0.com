import http from 'node:http';
import fs from 'fs';
import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

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

const app = express();
app.use(cors());
app.use(express.json());

// Define a Mongoose schema and model
const itemSchema = new mongoose.Schema({
    title: String
});
const Item = mongoose.model('Item', itemSchema);

// API endpoint to get items
app.get('/api/items', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Serve static files and handle other routes
app.use((req, res) => {
    console.log(`Received request for ${req.url}`); // Debugging statement

    if (req.url === '/' || req.url === 'Home/home') {
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
    } else if (req.url === 'Home/styles.css') {
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
    } else if (req.url === '/Generel_link/general') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        fs.readFile(path.join(process.cwd(), 'General_link', 'general.html'), (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('Error loading general.html');
            } else {
                res.end(data);
            }
        });
    } else if (req.url === '/General_link/styles.css') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/css');
        fs.readFile(path.join(process.cwd(), 'General_link', 'styles.css'), (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('Error loading styles.css');
            } else {
                res.end(data);
            }
        });
    } else if (req.url === '/General_link/favicon.ico') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'image/x-icon');
        fs.readFile(path.join(process.cwd(), 'General_link', 'favicon.ico'), (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('Error loading favicon.ico');
            } else {
                res.end(data);
            }
        });

    } else if (req.url === 'Home/Secret Messages') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/octet-stream');
        fs.readfile(path.join(process.cwd(), 'Home', 'Secret Messages', 'Secret Messages.exe'), (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('Error loading Secret Messages.exe');
            } else {
                res.end(data);
            }     
        });

    } else if (req.url == 'Home/GuessingGame') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/octet-stream');
        fs.readFile(path.join(process.cwd(), 'Home', 'GuesingGame', 'GuessingGame.exe'), (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('Error loading GuessingGame.exe');
            } else {
                res.end(data);
            }
        });
    } else if (req.url === '/Home/Circle_clock/clock_shape.html') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        fs.readFile(path.join(process.cwd(), 'Home', 'Circle_clock', 'clock_shape.html'), (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('Error loading clock_shape.html');
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

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
