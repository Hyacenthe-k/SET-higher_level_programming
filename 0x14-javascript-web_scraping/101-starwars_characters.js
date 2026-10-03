#!/usr/bin/node
const request = require('request');
const filmId = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${filmId}`;

const printCharacters = (characters, index) => {
  if (index >= characters.length) {
    return;
  }
  request.get(characters[index], (error, response, body) => {
    if (!error) {
      const character = JSON.parse(body);
      console.log(character.name);
      printCharacters(characters, index + 1);
    }
  });
};

request.get(url, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    const film = JSON.parse(body);
    printCharacters(film.characters, 0);
  }
});
