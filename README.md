# tretton37-colleagues

This project was a code assignment for evaluation purposes. When the app loads it fetches a list of 1337 colleagues and displays them in a grid.

I chose React as a framework because Create React App comes with a nice boilerplate for this kind of small project including TypeScript and it would handle the filter functionality neatly.
Create React App also comes with Eslint and Jest needed for QA.

I have made the code easy to maintain and collaborate with by keeping components small in a consistent structure. This is beneficial when we need to fix problems or make changes later. I extracted helper functions that can be tested and reused by themselves, which helps keep the code in a good shape.

I've made sure that the code is easy to understand by giving functions and components simple and meaningful names. This way, anyone who looks at the code can quickly figure out what it does.

I chose to add only the minimal dependencies:

#### normalize.css

Makes browsers render elements consistently

#### gh-pages

Enable deployment to [here](https://jeelii.github.io/tretton37-colleagues) through Github Pages

## Features

### Design/accessibility

#### Responsive design, works on mobile and tablets

I chose the mobile first approach to have a consistent system for the responsive styling. If I had more time I would have added scss and made the media queries into mixins.

#### Screen reader functionality

- Uses semantic HTML
- Labeled input field

#### Use modern CSS throughout the application

- Variables for colors and paddings.
- Css grid for a responsive flexible grid layout.

### Functionality

#### Filter by name and office

I chose to make one searchbox to be able to find a person as quick as possible, like Google.

Search functionality:

- Instant search
- Case insensitive
- Handles multiple search terms
- Ignores invalid characters

#### Available on a free public url

Of course I wanted to publish the site. Here it is 👉 https://jeelii.github.io/tretton37-colleagues

### Testing/QA

#### Uses Typescript

#### Unit tests

I added unit tests for the search helper functions. A bonus is that the functionality is clear to another developer.

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
