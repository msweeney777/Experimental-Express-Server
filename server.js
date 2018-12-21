const express = require('express');
const hbs = require('hbs');

const app = express();

hbs.registerPartials(__dirname + '/views/partials');

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'The Spessart: Cradle of Fairytales',
    welcomeMessage: 'Welcome to my website'
  });
});

app.get('/introduction', (req, res) => {
  res.render('introduction.hbs', {
    pageTitle: 'An Introduction'
  });
});

app.get('/etymology', (req, res) => {
  res.render('etymology.hbs', {
    pageTitle: 'Etymology'
  });
});

app.get('/trivia', (req, res) => {
  res.render('trivia.hbs', {
    pageTitle: 'Trivia'
  });
});

app.get('/pre-history', (req, res) => {
  res.render('pre-history.hbs', {
    pageTitle: 'Pre-history'
  });
});

app.listen(3000, () => {
  console.log("Listening")
});
