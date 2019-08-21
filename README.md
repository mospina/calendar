# Calendar

## Design steps

- Specification
  - REQUIRES: preconditions for correctness
  - MODIFIES: what does it change?
  - EFFECTS: What does the method do?
- Usage scenarios
- Test specifications
- Implementation

## Commands to setup and work on JS/react

> create-react-app calendar
> cd calendar/

For snapshot test:
> npm install --save-dev react-test-renderer

For unit test
> npm install --save-dev enzyme react-addons-test-utils enzyme-adapter-react-16

For type checks
> npm install --save-dev flow-bin
> node_modules/flow-bin/flow-linux64-v0.105.2/flow init
> npm install prop-types

## Available Scripts

In the project directory, you can run:

- `npm start` : [http://localhost:3000](http://localhost:3000)
- `npm test` : Launches the test runner
- `npm run build` : builds the app for production to the `build` folder
- `npm run eject` : **Note: this is a one-way operation. Once you `eject`, you can’t go back!**

 1058  npm run flow init
 1059  npm run node_modules/flow-bin/flow-linux64-v0.105.2/flow init
 1061  ls
 1062  ls -a
 1063  history | tail -n 5 
 1064  history | tail -n 10 
 1065  history | tail -n 10 >> README.md 
