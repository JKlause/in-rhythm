# LAB - 

## Project Name

### Author: Student/Group Name

### Links and Resources
* [submission PR](http://xyz.com)
* [travis](http://xyz.com)
* [back-end](http://xyz.com) (when applicable)
* [front-end](http://xyz.com) (when applicable)

#### Documentation
* [api docs](http://xyz.com) (API servers)
* [jsdoc](http://xyz.com) (Server assignments)
* [styleguide](http://xyz.com) (React assignments)

### Setup
#### `.env` requirements
* `PORT` - Port Number
* `MONGODB_URI` - URL to the running mongo instance/db

**or, include an `.env.example`**

#### Running the app
Commands:
    "lint": "eslint .",
    "pretest": "npm run lint",
    "jest": "jest --runInBand",
    "test": "npm run jest -- --coverage",
    "test:watch": "npm run jest -- --watchAll",
    "test:verbose": "npm run test -- --verbose",
    "start": "node server.js",
    "start:watch": "nodemon server.js"

#### Tests
* Jest Tests: `npm test`
* Lint Tests: `npm run lint`

#### UML
Link to an image of the UML for your application and response to events


1) make function that takes milliseconds and console logs four 'clicks' at that millisecond increment
2) change parameter to be a bpm
3) add second parameter that is  millisecond that console logs four 'clicks' at the original bpm plus that millisecond interval after initial increment is finished
4) convert second paramter to bpm
5) have function choose faster or slower
6) function returns 'faster' or 'slower'