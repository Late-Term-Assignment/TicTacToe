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

The development serer rebuilds itself and reloads when changes are made to it. If you want to manuall build it, run the following command
* `npm run build`

## Development client
To deploy the development client use the following command.
* `npm run dev-client`


## Development server

To deploy the development server input the following command.
* `npm run dev-server`

## Running unit tests

Unit testing is implemented using jest and the tests can be found in [ticTacToe.test.js](../src/logic/ticTacToe.test.js). 
Use the following command to run the unit tests.
* `npm test`

## Running end-to-end tests
End-to-end testing is implemented using Puppeteer and the tests can be found in [puppeteer.js](../e2e/puppeteer.js).
Use the following command to run the end-to-end tests (note that must build and deploy before testing).
* node `../e2e/puppeteer.js`

## Further help
For further information please contact...