# Pipeline builder
## 🚧🚧🚧🚧 Work in progress 🚧🚧🚧🚧
Created a custom configured  monorepo ecosystem (using TurboRepo) where the UI components (React) are shared between the 3 platforms ```Web (Next js)```, ```Desktop (Electron)``` and ```VS Code Extention (yo generator)```
Configured each platform individually with custom build scripts


### Installation 
(at root level)
- Workspace installation 
```sh
npm i -W 
```

-Web App installation

```sh
npm i --workspace=web 
```

- Desktop App installation
```sh
npm i --worksapce=desktop
```
Additionally, for desktop
```sh
cd apps/desktop
npm i
```


### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build :
- Web

```
npm run dev --workspace=web
```

- Desktop
(may need to run react server parralely as prerequisite, but adding custom build script sson)
```
npm run dev --worspace=desktop 
```



## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
