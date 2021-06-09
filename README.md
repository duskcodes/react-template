# react-template

> Personal template for React projects.

## Installation

1. Create a new repository from this template
2. Run `git clone {NEW_REPO_URL}`
3. Configure the template for your new project
   - Update `README.md`
   - Update `package.json`
   - Delete `.env.example` or rename to `.env`
4. Run `npm install` to install dependencies and Git hooks
5. Run `npm start` to start development server
6. Open <http://localhost:8080>

**NOTE:** Run `git config core.filemode false` if your development environment causes problematic file permissions (e.g. WSL with mounted drives).

## Features

### Technologies

#### Scripting and building

| Purpose            | Package          | Config file         |
| ------------------ | ---------------- | ------------------- |
| Compiler           | Babel            | `babel.config.json` |
| Module bundler     | Webpack          | `webpack.config.js` |
| Router             | React Router DOM |                     |
| Prop type checker  | prop-types       |                     |
| Class name utility | classNames       |                     |
| HTTP client        | Ky (polyfilled)  |                     |

#### Styling

| Purpose                   | Package       | Config file         |
| ------------------------- | ------------- | ------------------- |
| Preprocessor              | Sass          |                     |
| Browser styles normaliser | normalize.css |                     |
| Vendor prefixer           | Autoprefixer  | `postcss.config.js` |

### Developer experience

| Purpose        | Package     | Config file          |
| -------------- | ----------- | -------------------- |
| Linter         | ESLint      | `.eslintrc.json`     |
| Formatter      | Prettier    | `.prettierrc.json`   |
| Git hooks      | Husky       | `.huskyrc.json`      |
| Lint runner    | lint-staged | `.lintstagedrc.json` |
| VS Code config |             | `jsconfig.json`      |

### Environment variables

- Secrets
  1. Create `.env` file in root directory (example: `.env.example`)
  2. Access in code with `process.env.{VARIABLE}`
- Runtime globals
  1. Add to `DefinePlugin` in `webpack.config.js`
  2. Add to `globals` in `.eslintrc.json`
  3. Access in code with `{GLOBAL_VARIABLE}`

**NOTE:** `IS_PRODUCTION` is included as a global.

### Sync colours

1. Store in, and export from, `src/styles/_colours.scss`
2. Automatically re-exported from `src/styles/colours.js`
3. Import `src/styles/colours.js`
4. Access in code with `colours.{COLOUR}`

### Custom HTML template

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
  - Opt-in via `googleAnalyticsPropertyId` (production)
  - Anonymised IP addresses

### npm scripts

| Command                      | Description                                         |
| ---------------------------- | --------------------------------------------------- |
| `npm run build`              | Clean `dist` directory and build app for production |
| `npm run clean:dist`         | Clean `dist` directory                              |
| `npm run clean:node_modules` | Clean `node_modules` directory                      |
| `npm run format:check`       | Check for formatting issues                         |
| `npm run format:fix`         | Fix formatting issues                               |
| `npm run lint:check`         | Check for linting issues                            |
| `npm run lint:fix`           | Fix linting issues                                  |
| `npm start`                  | Start development server                            |

### Ignore files

- `.gitignore`
- `.eslintignore`
- `.prettierignore`

## Roadmap

- TypeScript
- Jest
- stylelint
- Browserslist
- Source maps
- Simple HTTP client (wrap Ky)
- Improve HTML template using HTML5 Boilerplate/Front-End Checklist
- Improve Mozilla Observatory and WebPageTest scores

## Notes

- Should work on Unix-like operating systems and WSL
- Includes workaround for WSL 2 [hot reloading issue](https://github.com/microsoft/WSL/issues/4739) via file system polling

## Resources

- [Vercel](https://vercel.com) — staging/production deployment hosting

## Contact

[Website](https://dusktrades.com) • [Twitter](https://twitter.com/dusktrades) • [Email](mailto:dusktrades@protonmail.com)

## License

MIT © [Dusk](https://dusktrades.com)
