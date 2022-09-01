# My Polls
This app lets an employee create polls for coworkers. The process goes like this: An employee is asked a question in the form: “Would you rather [option A] or [option B] ?”. Answering "neither" or "both" is not possible.

In this app, users will be able to answer polls, see which polls they haven’t answered, see how other people have voted, post polls, and see the ranking of users on the leaderboard.

This project login users present in `src/utils/_DATA.js` file. A logged in person can create a new poll, poll others and view leaderboard.


## Directory Structure

```bash
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    │── actions
    │   │── authedUser.js # authedUser action.
    │   │── index.js # index file of actions.
    │   │── polls.js # poll action.
    │   │── users.js # users action.
    │── components
    │   │── App.js # This is the root of app. Contains routing of the app.
    │   │── App.test.js # Unit Test file.
    │   │── CreatePoll.js # Renders create poll component of the app.
    │   │── CreatePoll.test.js # Unit Test file.
    │   │── Dashboard.js # Renders dashboard.
    │   │── Leaderboard.js # Renders leaderboard component.
    │   │── Leaderboard.test.js # Unit Test file.
    │   │── Login.js # Renders login component.
    │   │── Login.test.js # Unit Test file.
    │   │── Nav.js # Renders sidebar.
    │   │── Nav.test.js # Unit Test file.
    │   │── NotFound.test.js # Renders not found page.
    │   │── Poll.js # Renders poll component.
    │   │── PollPage.js # Renders poll page.
    │── reducers
    │   │── authedUser.js # authedUser reducer.
    │   │── index.js # index file of reducers.
    │   │── polls.js # poll reducer.
    │   │── users.js # users reducer.
    │── utils
    │   │── _DATA.js # data file served as backend.
    │   │── actionType.js # stores action types.
    │   │── constant.js # constants file.
    │   │── DATA.test.js # unit test of data.
    │   │── helpers.js # helper functions.
    │   │── index.js # index of units.
    │   │── withReducer.js # withReducer HOC for routing.
    ├── history.js # browser history file.
    ├── index.css # stylesheetz.
    ├── index.js # entry point of app.
    ├── middleware.js # constants middlewares
    ├── store # store of file.
    │── .gitignore # Igrnores useless files for git tracking.
```

## Routing

    Login page is at [`Login`](http://localhost:3000/login)

    Dashboard page is at [`Dashboard`](http://localhost:3000/)

    Leaderboard page is at [`Leaderboard`](http://localhost:3000/leaderboard)

    Create New page is at [`Create New`](http://localhost:3000/add)

    Poll page is at [`Poll`](http://localhost:3000//poll/:id)


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
