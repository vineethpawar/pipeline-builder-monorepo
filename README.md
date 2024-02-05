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

- Web App installation

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



### Build

To build :
- Web

```
npm run dev --workspace=web
```

- Desktop
(run these on seperate terminals in mentioned order)
```
npm run dev --worspace=web 
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
