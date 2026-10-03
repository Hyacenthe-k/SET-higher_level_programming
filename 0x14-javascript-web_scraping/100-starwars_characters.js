#!/usr/bin/node
const request = require('request');
const filmId = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${filmId}`;

request.get(url, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    const film = JSON.parse(body);
    const characters = film.characters;

    for (const charUrl of characters) {
      request.get(charUrl, (charErr, charRes, charBody) => {
        if (!charErr) {
          const character = JSON.parse(charBody);
          console.log(character.name);
        }
      });
    }
  }
});
