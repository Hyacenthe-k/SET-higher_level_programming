#!/usr/bin/node
const request = require('request');
const filmId = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${filmId}`;

request.get(url, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    const movie = JSON.parse(body);
    console.log(movie.title);
  }
});
