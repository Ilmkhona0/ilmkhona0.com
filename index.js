import http from 'node:http';
import fs from 'fs';
import path from 'path';
import connectDB from './db.js';
import User from './models/User.js';
import dotenv from 'dotenv';

dotenv.config();

const hostname = '0.0.0.0';
const port = process.env.PORT || 8000;

// Connect to MongoDB
connectDB();

const server = http.createServer((req, res) => {
    if (req.url === '/' || req.url === '/home') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        fs.readFile(path.join(process.cwd(), 'home.html'), (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('Error loading the HTML file');
            } else {
                res.end(data);
            }
        });
    } else if (req.url === '/about') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        fs.readFile(path.join(process.cwd(), 'clock shape.html'), (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('Error loading the HTML file');
            } else {
                res.end(data);
            }
        });
    } else if (req.url === '/styles.css') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/css');
        fs.readFile(path.join(process.cwd(), 'styles.css'), (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('Error loading the CSS file');
            } else {
                res.end(data);
            }
        });
    } else if (req.url === '/api/users') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        User.find({}, (err, users) => {
            if (err) {
                res.statusCode = 500;
                res.end('Error fetching users');
            } else {
                res.end(JSON.stringify(users));
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