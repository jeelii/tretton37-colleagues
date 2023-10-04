# tretton37-colleagues

This project was a code assignment for evaluation purposes. When the app loads it fetches a list of 1337 colleagues and displays them in a grid.

I chose React as a framework because Create React App comes with a nice boilerplate for this kind of small project including TypeScript and it would handle the filter functionality neatly.

## Features

- Uses Typescript
- Responsive design, works on mobile and tablets
- Filter by name and/or office
  - Case insensitive
  - Handles multiple search terms
  - Ignores invalid characters
- Screen reader functionality
  - Uses semantic HTML
  - Labeled input field
- Use modern CSS throughout the application
  - Variables for colors and paddings
  - Css grid for a responsive flexible grid layout
- Unit tests for the search helper functions

## Instructions

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
