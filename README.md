## Tech Stack 🥞

#### Foundation 🏡

Using **[GatsbyJs](https://github.com/gatsbyjs/gatsby)** the website's **[React](https://github.com/facebook/react)** code is rendered to static HTML at built time. Once a client visits the page, a JavaScript bundle is loaded asynchronously.

#### Data 📚

Content is stored in markdown files and queried using [**GraphQL**](https://graphql.org/).

#### Styling 👩‍🎨

Styling is done using [**Styled Components**](https://www.styled-components.com).

## Linting & Formatting 🔍

The codebase is type-checked using **[TypeScript](https://www.typescriptlang.org/)**, formatted using **[Prettier](https://github.com/prettier/prettier)** and linted using **[TSLint](https://palantir.github.io/tslint/)**. Enforced using commit hooks.

## Continuous Deployment 🚀

As soon as changes are merged into the `master` branch, the page will automatically be built by **[Netlify](https://netlify.com)**. It is then deployed as a static site using the Netlify CDN.
