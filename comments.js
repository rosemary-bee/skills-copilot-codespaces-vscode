// Create web server
const express = require('express');
const app = express();
app.use(express.static('public')); // serve static files

// Create a route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Create a route
app.get('/comments', (req, res) => {
  res.send('This is the comments page');
});

// Create a route
app.get('/about', (req, res) => {
  res.send('This is the about page');
});

// Create a route
app.get('/contact', (req, res) => {
  res.send('This is the contact page');
});

// Create a route
app.get('/faq', (req, res) => {
  res.send('This is the FAQ page');
});

// Create a route
app.get('/terms', (req, res) => {
  res.send('This is the terms page');
});

// Create a route
app.get('/privacy', (req, res) => {
  res.send('This is the privacy page');
});

// Create a route
app.get('/news', (req, res) => {
  res.send('This is the news page');
});

// Create a route
app.get('/news/:id', (req, res) => {
  res.send('This is the news page with id: ' + req.params.id);
});

// Create a route
app.get('/products', (req, res) => {
  res.send('This is the products page');
});

// Create a route
app.get('/products/:id', (req, res) => {
  res.send('This is the products page with id: ' + req.params.id);
});

// Create a route
app.get('/services', (req, res) => {
  res.send('This is the services page');
});

// Create a route
app.get('/services/:id', (req, res) => {
  res.send('This is the services page with id: ' + req.params.id);
});

// Create a route
app.get('/users', (req, res) => {
  res.send('This is the users page');
});

// Create a route
app.get('/users/:id', (req, res) => {
  res.send('This is the users page with id: ' + req.params.id);
});

// Create a route
app.get('/images', (req, res) => {
  res.send
  