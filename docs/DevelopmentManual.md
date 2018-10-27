# About

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [AdministrationManual.md](./AdministrationManual.md) for notes on how to deploy the project on a live system.

## Prerequisites

The backend depends on NodeJS (v8.12.0). 

* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) - Source control

* [NodeJS](https://nodejs.org/en/download/) - JavaScript runtime

## Installing

The first step is to install Node v8.12.0. Follow the link provided above and choose the currect version for your OS.

Next you need to clone the repo. Open a terminal and cd into the appropriate directory and enter the following command:
* `git clone https://github.com/Late-Term-Assignment/TicTacToe.git`

When the repo is up and running you need to install node dependencies
* `npm install`

If you are considering contributing to the project we recommend branching out from the dev branch
* `git checkout dev`
* `git checkout -b [Branch name]`

## Build

To build the project run the following command
* `npm run build`

## Development server

Now everything should be set up and you can deploy the server with
* `npm start`

## Running unit tests

Unit testing is implemented using jest and the tests can be found in [ticTacToe.test.js](../src/logic/ticTacToe.test.js). 
Use the following command to run the unit tests.
* `npm test`

## Running end-to-end tests


## Further help
For further information please contact...