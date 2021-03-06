# Design report

## Introduction
This report presents the design of a loosely coupled tic-tac-toe program, using and API that holds all the games logic and the web interface only communicates with that API. We used git for version control. The program is run on a node.js server and uses express framework to run the server. Circle CI is used for continuous integration and testing of the server side code. We use Heroku to as a remote server for the program. We use code coveralls for code coverage. 

## Tic-Tac-Toe
Tic-Tac-Toe is composed of many functions. Each function follows the single responsibility principle. The application is split in three parts. Game logic, web interface and web logic. The game logic is the main part running the game and keeping track of whos turn it is, what part of the game board has been filled in and who won. The web interface is how the game board will look and the web logic handles players actions.

## Version control
We chose Git as version control over version control system because everyone was familiar with git before the project. We also chose it since it is very versatile and dynamic in every action, making pull requests and reviewing them was simple and fast.

## Development environment
We used Node.js as the runtime environment because everyone in the group was familiar with javascript. The Express framework was used to simplify the server setup. We used webpack to pack the files for deployment and webpack-dev-server to develop without having to be constantly restarting the server.

## Hosting
Heroku was used to host the node server and is used for puppeteer testing. There is one feature with hosting out API on Heroku which results in multiplayer where players can compete against each other over the internet, but unfortunately unable to see the opponents move until after the user has made a move himself. Heroku is only up for 18 hours a day and softly shuts down after 5 minutes of inactivity and only comes back online after a request is made on the route. The staging server for the program is located on https://fast-tor-43758.herokuapp.com/ and the deployment server is located on https://tictactoe1inarow.herokuapp.com/

## Testing
When implementing unit testing we followed the TDD mantra of testing, implementing, and refactoring. The *Jest* dependency was used to perform unit testing and provided us with the ability of seeing code coverage.
The *Supertest* dependency was used for integration testing, mainly to test the interactions with the server.
The *Puppeteer* dependency was used to perform automated UI tests.


## Code coverage
The code coverage was used by using coveralls.io website by connecting the github repo to the coveralls website. After every build a custom script is run that pushes the code coverage to coveralls.io and the code coverage percentage can be seen on the github repo.

## Coding rules
The coding rules are as follows. All classes, functions and variables use camelcasing. Every curly bracket should be inline. Every function is a verb while every class is a noun.
Git branches should be named with pascalcasing and describe the activity being done on the branch. 

## Summary
The main focus of the project was to get personal experience of continuous delivery and it's processes with the node framework. In retrospect this project taught us more about how to develop a server rather than experiencing continuous delivery. Git was a useful tool in maintaining the project version with multiple developers. We experienced difficulties when working on the project when the Github servers shut down. Implementing the game logic went moderately well, the only problem was our lack of understanding how to use an API for the logic and how to interact with it. Node was an outstanding tool in building the server and webpack's utilities made testing simple. There were no problems with hosting on Heroku.