const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

// var server = app.listen(3000, listen);
//
// function listen() {
//   console.log("Listening")
// }

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'The Spessart: Cradle of Fairytales',
    welcomeMessage: 'Welcome to my website'
  });
});

// function introduction(req, res) {
//   res.send('The Spessart is a series of low wooden mountains lying between the states of Bavaria and Hesse in Germany.');
// }

app.get('/etymology', etymology);

function etymology(req, res) {
  res.send('The name `Spessart` is derived from "Spechtshardt" a compound word composed of Specht - i.e. woodpecker - and the now outdated `hardt` - hilly forest.');
}

app.get('/trivia', trivia);

function trivia(req, res) {
  res.send("It is believed that the tale of Snow White may have originated in the Spessart. It is believed that the dwarves mentioned in this classic fairytale are in fact based upon the stunted miners who worked along the Bieber river nearby. Also featured in the fairytale is a glass coffin - perhaps a nod to the glassworking industry that boomed here.")
}

app.get('/pre-history', history);

function history(req, res){
  res.send("Remains of a Hillfort on the Schanzenkopf (Schwedenschanze) are indicative of a Celtic presence here dating from roughly 500 - 100 BC. The Romans' subsequent arrival did not however entail direct settlement of the area, as traces of a Roman presence can only be found in the region's northwestern edge owing in part to a lack of direct control over the region; the western 'Vorspessart' was essentially left untouched being a sort of buffer between Roman territory and tribal neighbors.")
}

app.listen(3000, () => {
  console.log("Listening")
});

// function listen() {
//   console.log("Listening")
// }
