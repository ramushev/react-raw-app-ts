# React Raw App TS
![react-raw-app-ts-at](https://user-images.githubusercontent.com/77093538/155588516-7252d796-f85a-4472-839b-800a249e09f5.png)

React-raw-app-ts is professional react boilerplate for building fast, robust, customizable, and adaptable web apps or sites.

Boilerplate includes:
- React 17
- Webpack 5
- Typescript
- Sass
- Babel
- React testing library

## Installation

```
git clone https://github.com/ramushev/react-raw-app-ts.git
cd react-raw-app-ts
npm i
```
### Development server

```bash
npm start
```

You can view the development server at `localhost:8081`.

### Tests

```bash
npm test
```

### Production build

```bash
npm run build
```

## Dependencies

### webpack

- [`webpack`](https://github.com/webpack/webpack) - Module and asset bundler.
- [`webpack-cli`](https://github.com/webpack/webpack-cli) - Command line interface for webpack
- [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) - Development server for webpack
- [`webpack-merge`](https://github.com/survivejs/webpack-merge) - Simplify development/production configuration
- [`cross-env`](https://github.com/kentcdodds/cross-env) - Cross platform configuration

### Babel

- [`@babel/core`](https://www.npmjs.com/package/@babel/core) - Transpile ES6+ to backwards compatible JavaScript
- [`@babel/plugin-transform-typescript`](https://babeljs.io/docs/en/babel-preset-typescript) - This preset is recommended if you use TypeScript, a typed superset of JavaScript
- [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env) - Smart defaults for Babel

### Loaders

- [`babel-loader`](https://webpack.js.org/loaders/babel-loader/) - Transpile files with Babel and webpack
- [`sass-loader`](https://webpack.js.org/loaders/sass-loader/) - Load SCSS and compile to CSS
- [`sass`](https://www.npmjs.com/package/sass) - Node Sass
- [`css-loader`](https://webpack.js.org/loaders/css-loader/) - Resolve CSS imports
- [`style-loader`](https://webpack.js.org/loaders/style-loader/) - Inject CSS into the DOM

### Plugins

- [`clean-webpack-plugin`](https://github.com/johnagan/clean-webpack-plugin) - Remove/clean build folders
- [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin) - Generate HTML files from template
- [`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin) - Extract CSS into separate files

## Author

- [Eduard Ramushev](https://github.com/ramushev)

## License

This project is open source and available under the [MIT License](LICENSE).
