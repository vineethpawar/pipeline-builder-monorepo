# Pipeline builder

Created a custom configured  monorepo ecosystem (using TurboRepo) where the UI components (React) are shared between the 3 platforms ```Web (Next js)```, ```Desktop (Electron)``` and ```VS Code Extention (yo generator)```
Configured each platform individually with custom build scripts



https://github.com/vineethpawar/pipeline-builder-monorepo/assets/55575881/6a2e03eb-536c-4405-af78-bd7b9af7281b



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


### Project Structure & Tech Stack

- `UI shared package`: Used React components with Context API
- `Libraries`: [AntDesign]([url](https://ant.design/)) for styling, [React Flow]([url](https://reactflow.dev/)) for the Node block editor
- `@repo/ui`: a custom React UI component package shared across `web` , `desktop` and `vscode extension` applications, containing context state, validators, mock node data, types and othe common utilities
- `Web`: Web App built with Next.js,TypeScript, utilising React UI components wrapped with Context provider.
- `Desktop`: Developed PWA using Electron js, Needs web workspace running as dependency in seperate terminal
- `VS Code Extension`: Developed with yo generator typescript template, Used Single Colmn WebView and enabled scripts to allow Popup, Drawer and other styles to work.


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

- VS Code Extension
(open code with `cd apps/pipeline-builder-vscode` as root folder)
```
open src/extension.ts and press F5 to run debug mode - which will open the sanbox vs code
run the helloworld cmd from palette (cmd + shift + p)
```



## Useful Links

Monoreop configuration
- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)

React Flow
- [Rectflow validation](https://reactflow.dev/examples/interaction/validation)https://reactflow.dev/examples/interaction/validation)
- [React Flow node update with styles](https://reactflow.dev/examples/nodes/update-node)https://reactflow.dev/examples/nodes/update-node)

Electron with React App configuration
[Blog](https://medium.com/@azer.maslow/creating-desktop-applications-with-electron-and-react-b7f81f78c9d5)https://medium.com/@azer.maslow/creating-desktop-applications-with-electron-and-react-b7f81f78c9d5)

VS Code Extension
- [Basics - First Ext](https://code.visualstudio.com/api/get-started/your-first-extension)
- [Configuring React UI in webview with some customisations](https://blog.r2devops.io/blog/All/writing-vscode-extension-with-react/#:~:text=The%20first%20step%20to%20create,the%20skeleton%20of%20the%20extension.)
- [VSCode Webview Panel with React](https://medium.com/@michaelbenliyan/developers-guide-to-building-vscode-webview-panel-with-react-and-messages-797981f34013)

