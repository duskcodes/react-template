# react-template

Personal template for front-end React projects.

## Installation

1. Create a new repository from this template
2. Run `git clone` on the resulting repository
3. Configure the template for your new project
   - Directory structure/template files in `src`
   - `.*ignore` files
   - Rename `.env.example` to `.env`
4. Run `npm install`
5. Run `npx husky install`
6. Run `npm start`
7. Open <http://localhost:8080>

## Features

- Modern JavaScript support via `Babel`
- Modern CSS support via `Sass`/`Autoprefixer`/`normalize.css`/`CSS Modules`
- Module bundling and development environment via `Webpack`
- Opinionated linting and formatting via `ESLint`/`Prettier`
- Git hooks via `Husky`/`lint-staged`
- Enhanced VSCode developer experience via `jsconfig.json`
- Environment variables from `.env` with `process.env.MY_VARIABLE`
- Scripts for common tasks
  - `npm run build`
  - `npm run clean:dist`
  - `npm run clean:node_modules`
  - `npm run format:check`
  - `npm run format:fix`
  - `npm run lint:check`
  - `npm run lint:fix`
  - `npm start`

## Roadmap

- `Jest`
- `stylelint`
- `Browserslist`
- Source maps
- `TypeScript`
- Improve HTML template using `HTML5 Boilerplate`
- Improve documentation

## Notes

- Should work on Unix-like operating systems and WSL
- Includes workaround for WSL 2 [hot reloading issue](https://github.com/microsoft/WSL/issues/4739) via file system polling

## License

[The MIT License](https://raw.githubusercontent.com/dusktrades/react-template/master/LICENSE)
