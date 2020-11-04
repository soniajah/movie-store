# movie-store
react nodejs project for movie search and booking by user.

# Description
It contains:
- Home page (shows a list of movies for a specific user, a search bar for movies by title, filter by language, filter by location)
- Movie details page
- Login page under construction

# Notes
- The server/app.js calls the function "controllers.home.initialize()" that initializes the process of creating a user and a list of movies. It runs automatically when the server runs. The user and the movies that are migrated to the DB can be found in sever/data folder.
- A user can create and delete a booking that can be checked in DB now (the rendering of it is under construction) 


# Instructions to run
- download and install mongoDB compass from https://www.mongodb.com/try/download/compass

- To run the server in Terminal 1:
    - cd server
    - npm i or npm install
    - npm start
- To run the client in Terminal 2:
    - cd client
    - npm i or npm install
    - npm start

Go to http://localhost:3000

# Instructions for test
- cd server
- npm i or npm install
- npm start