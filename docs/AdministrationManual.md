# About

These instructions will get you a copy of the project deployed on a live server. See [DevelopmentManual.md](./DevelopmentManual.md) for notes on how to get the project running on your local machine for development and testing purposes.

## Prerequisites

The back-end depends on NodeJS (v8.12.0). 

* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) - Source control

* [NodeJS](https://nodejs.org/en/download/) - JavaScript runtime

## Installing

The first step is to install Node v8.12.0. Follow the link provided above and choose the currect version for your OS.

Next you need to clone the repo. Open a terminal and cd into the appropriate directory and enter the following command:
* `git clone https://github.com/Late-Term-Assignment/TicTacToe.git`

When the repo is up and running you need to install node dependencies
* `npm install`

## Running the tests
Before building and deploying you must run the tests to see if the project is working. Unit testing, integration testing and end-to-end testing have all been implemented.  
* **Unit testing** was implemented using *Jest* and the tests can be found in [ticTacToe.test.js](../src/logic/ticTacToe.test.js).  
* **Integration testing** was implemented with *Supertest* and the tests can be found in [ticTacToe.test.js](../src/api/index.test.js).  
* **End-to-end testing** was implemented with *Puppeteer* and the tests can be found in [puppeteer.test.js](../src/E2ETesting/puppeteer.test.js).

Use the following command to run the tests. A console table representing the codecoverage will follow the tests.
* `npm test`

## Deploying to server

If all the tests are completed sucessfully you tag the the project with a version number and then push to master with the following commands.
* `git tag [version number]`
* `git push origin master`

After the project has been pushed to master it can be deployed to heroku with the following command.
* `git push -f https://heroku.com/: d55ab12a-96bb-4368-9cc8-ab76320f035c@git.heroku.com/tictactoe1inarow.git HEAD:master`