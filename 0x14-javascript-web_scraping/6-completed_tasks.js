#!/usr/bin/node
const request = require('request');
const url = process.argv[2];

request.get(url, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    const todos = JSON.parse(body);
    const completedByUser = {};

    for (const todo of todos) {
      if (todo.completed) {
        if (completedByUser[todo.userId] === undefined) {
          completedByUser[todo.userId] = 1;
        } else {
          completedByUser[todo.userId]++;
        }
      }
    }
    console.log(completedByUser);
  }
});
