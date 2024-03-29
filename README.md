## [commonknowledge.coop](https://commonknowledge.coop) 

Public website for Common Knowledge Co-operative. 

### Key tech 

The deployed website is a static site generated by [Gatsby](https://www.gatsbyjs.org), styled with [Rebass](https://rebassjs.org/) and [styled-components](https://www.styled-components.com/) for explicit CSS, and written in [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/). Relies on [Node](https://nodejs.org/en/) for development, preferably installed via [Node Version Manager (`nvm`)](https://github.com/creationix/nvm).

### Development

- **Initial install**: `yarn` to dl/build package dependencies (prefer `node@^11`)
- **Dev deploy**: `yarn develop` to deploy locally with hot-reload on edit, exposed to [http://localhost:8000/](http://localhost:8000/).
- **Prod deploy**: Commit to `master` branch and push to [GitHub](https://github.com/commonknowledge/website) to auto-deploy a new production version to https://commonknowledge.coop

#### If you encounter a `sharp` error

Delete `node_modules/sharp`, then run `yarn add sharp` and it should fix itself.

### Infrastructure

- Production deployment from GitHub is handled by [netlify.com/sites/commonknowledge](https://app.netlify.com/sites/commonknowledge/overview). It will run `gatsby build` remotely to generate the production-ready static files. Login to the control panel with hello@commonknowledge.coop (password in the shared LastPass folder)
- DNS config is version controlled at [git.coop/dns/commonknowledge/zonefiles](https://git.coop/dns/commonknowledge/zonefiles)
