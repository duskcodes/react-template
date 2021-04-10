# react-template

Personal template for front-end React projects.

## Installation

1. Create a new repository from this template
2. Run `git clone` on the resulting repository
3. Configure the template for your new project
   - Delete `.env.example` or rename to `.env`
4. Run `npm install` to install dependencies
5. Run `npx husky install` to install Git hooks
6. Run `npm start` to start development server
7. Open <http://localhost:8080>

NOTE: Run `git config core.filemode false` if your development environment causes problematic file permissions (e.g. WSL with mounted drives).

## Features

### Scripting and building

- Babel
- Webpack

#### React

- React Router (DOM)
- PropTypes
- classNames

#### HTTP client

- ky (polyfilled)

#### Environment variables

- Secrets
  1. Create `.env` file in root directory (example: `.env.example`)
  2. Access in code with `process.env.{VARIABLE}`
- Runtime variables
  1. Add to `DefinePlugin` in `webpack.config.js`
  2. Add to `globals` in `.eslintrc.json`
  3. Access in code with `process.env.{VARIABLE}`

NOTE: `process.env.IS_PRODUCTION` is included.

### Styling

- Sass
- CSS Modules
- normalize.css
- Autoprefixer (`postcss.config.js`)

#### Colours

Make Sass colours accessible throughout code:

1. Store and export in `src/styles/_colours.scss`
2. Automatically re-exported from `src/styles/colours.js`
3. Access in code with `colours.{COLOUR}`

### Linting and formatting

- ESLint (`.eslintrc.json`)
- Prettier (`.prettierrc.json`)

### npm scripts

- `npm run build` — clean `dist` directory and build app for production
- `npm run clean:dist` — clean `dist` directory
- `npm run clean:node_modules` — clean `node_modules` directory
- `npm run format:check` — check for formatting issues
- `npm run format:fix` — fix formatting issues
- `npm run lint:check` — check for linting issues
- `npm run lint:fix` — fix linting issues
- `npm start` — start development server

### Git hooks

Runs pre-commit linting and formatting checks.

- Husky (`.huskyrc.json`)
- lint-staged (`.lintstagedrc.json`)

### Ignore files

Best to keep these in sync.

- `.gitignore`
- `.eslintignore`
- `.prettierignore`

### Extras

- VS Code config (`jsconfig.json`)
- Custom HTML template (`index.html`)
  - Inject HTML variables with Webpack in `src/config/public.js`, defaults:
    - `title`
    - `description`
    - `googleAnalyticsPropertyId`
    - `isProduction`
  - Content Security Policy
  - Favicons
    - Replace `src/assets/favicons/favicon.png`
    - Defaults to dusk emoji
  - Google Fonts
    - Defaults to Lato
  - Google Analytics
    - Opt-in via `googleAnalyticsPropertyId`
    - Anonymised IP addresses

## Roadmap

- TypeScript
- Jest
- stylelint
- Browserslist
- Source maps
- Improve HTML template using HTML5 Boilerplate
- Improve Mozilla Observatory and WebPageTest scores
- Improve documentation

## Notes

- Should work on Unix-like operating systems and WSL
- Includes workaround for WSL 2 [hot reloading issue](https://github.com/microsoft/WSL/issues/4739) via file system polling
