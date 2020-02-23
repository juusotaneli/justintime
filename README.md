[![CircleCI](https://circleci.com/gh/juusotaneli/justintime.svg?style=svg&circle-token=6b497b6e8478c7742bda3e2eeaaa91faf772c0e9)](https://circleci.com/gh/juusotaneli/justintime)

JIT app is on [Heroku](https://justintime-app.herokuapp.com/)

## How to use

Using JIT-app is very simple - just navigate to Heroku and see the public transport options between my home and my (hopefully) soon-to-be summer work place.

JIT-app uses GraphQL to fetch the Itinerary data from HSL´s GraphQL-API. Displayed itineraries are updated every 30 seconds. In the display, journeys are divided into legs based on the type of the transport method, which also decides the colour given to a single leg (metro is pinkish, bus is blue etc.). The duration of a single leg is displayed in relation to the total duration of the whole journey.

## Docker

If you want to access the Docker image and run the app locally do the following

1. clone this git repo in a directory of your selection `git clone https://github.com/juusotaneli/justintime`
2. run `docker pull juusotaneli/jit-app:1.0`
2. run`docker run -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm juusotaneli/jit-app:1.0` in the root directory of the   cloned git repo
3. navigate to `http://localhost:3001` with your browser
