#!/usr/bin/env node

const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

const app = express();
dotenv.config();

const PORT = parseInt(process.env.PORT || 8000);
app.use('/assets', express.static(path.resolve(__dirname, 'assets')));

app.get('/', (_, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.get('/script.js', (_, res) => {
    res.sendFile(path.resolve(__dirname, 'script.js'));
});

app.get('/style.css', (_, res) => {
    res.sendFile(path.resolve(__dirname, 'style.css'));
});

app.listen(PORT, () => console.log('Running on http://localhost:' + PORT));